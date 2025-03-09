import { useTokenStore } from "@/store/useTokenStore";
import { useTableStore } from "@/store/useTableStore";
import { TableInterface } from "@/types";
import axios from "axios";
import { useEffect, useState, useCallback } from "react";

const API_URL = "https://api.coingecko.com/api/v3/coins/markets";
const REFRESH_INTERVAL = 60000;

export function useGetTokensTable() {
  const { selectedChain } = useTokenStore();
  const { page } = useTableStore();
  const [tokens, setTokens] = useState<TableInterface[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTokenTable = useCallback(async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(API_URL, {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 8,
          page,
          category:
            selectedChain === "eth"
              ? "ethereum-ecosystem"
              : "binance-smart-chain",
        },
      });

      setTokens(data);
    } catch (error) {
      console.error("🚨 Fetch error:", error);
    } finally {
      setLoading(false);
    }
  }, [page, selectedChain]);

  useEffect(() => {
    setTokens([]);
    fetchTokenTable();

    const interval = setInterval(() => {
      fetchTokenTable();
    }, REFRESH_INTERVAL);

    return () => clearInterval(interval);
  }, [selectedChain, fetchTokenTable]);

  return { tokens, loading };
}
