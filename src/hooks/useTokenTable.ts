import { useTokenStore } from "@/store/useTokenStore";
import { TableInterface } from "@/types";
import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://api.coingecko.com/api/v3/coins/markets";

export function useGetTokensTable() {
  const { selectedChain } = useTokenStore();
  const [tokens, setTokens] = useState<TableInterface[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTokenTable = async () => {
    setLoading(true);

    try {
      const { data } = await axios.get(url, {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 10,
          page: 1,
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
  };

  useEffect(() => {
    fetchTokenTable();
  }, [selectedChain]);

  return { tokens, loading };
}
