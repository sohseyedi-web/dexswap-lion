import { useTokenStore } from "@/store/useTokenStore";
import { useTableStore } from "@/store/useTableStore";
import { TableInterface } from "@/types";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets";
const PER_PAGE = 8;
const MAX_PAGE = 32;

export function useGetTokensTable() {
  const { selectedChain } = useTokenStore();
  const { page, setHasMore, setPage } = useTableStore();
  const [tokens, setTokens] = useState<TableInterface[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTokenTable = useCallback(
    async (signal?: AbortSignal) => {
      if (page >= MAX_PAGE) {
        setHasMore(false);
        setPage(MAX_PAGE);
        return;
      }

      setLoading(true);

      try {
        const { data } = await axios.get(API_URL, {
          signal,
          params: {
            vs_currency: "usd",
            order: "market_cap_desc",
            per_page: PER_PAGE,
            page,
            category:
              selectedChain === "eth"
                ? "ethereum-ecosystem"
                : "binance-smart-chain",
          },
        });

        if (page === 1) {
          setTokens(data);
        } else {
          setTokens((prev) => [...prev, ...data]);
        }

        if (page >= MAX_PAGE - 1 || data.length < PER_PAGE) {
          setHasMore(false);
        }
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error("🚨 Fetch error:", error);
          setHasMore(false);
        }
      } finally {
        setLoading(false);
      }
    },
    [page, selectedChain, setHasMore, setPage]
  );

  useEffect(() => {
    setPage(1);
    setTokens([]);
  }, [selectedChain, setPage]);

  useEffect(() => {
    const abortController = new AbortController();
    fetchTokenTable(abortController.signal);
    return () => abortController.abort();
  }, [fetchTokenTable]);

  return { tokens, loading };
}
