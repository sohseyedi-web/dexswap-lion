import { useRef, useCallback, useMemo, useEffect } from "react";
import { TableInterface } from "@/types";
import { useGetTokensTable } from "@/hooks/useTokenTable";
import { tokenTHeads } from "@/constant/tokenHeadLists";
import TokenTableRow from "./TokenTableRow";
import { useTableStore } from "@/store/useTableStore";
import { useTranslation } from "react-i18next";
import Loading from "@/ui/Loading";

const MAX_PAGE = 32;

const TableHeader = () => (
  <thead className="bg-zinc-900 rounded-2xl">
    <tr className="text-zinc-400 rounded-2xl">
      {tokenTHeads.map((header) => (
        <th className="border border-zinc-800 p-2 text-center" key={header.id}>
          {header.label}
        </th>
      ))}
    </tr>
  </thead>
);

const TokensTable = () => {
  const { tokens, loading } = useGetTokensTable();
  const { search, page, hasMore, setPage } = useTableStore();
  const { t } = useTranslation();
  const observer = useRef<IntersectionObserver | null>(null);

  const lastTokenRef = useCallback(
    (node: HTMLTableRowElement) => {
      if (loading || !hasMore || page >= MAX_PAGE) {
        if (observer.current) {
          observer.current.disconnect();
        }
        return;
      }

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore && page < MAX_PAGE) {
          setPage(Math.min(page + 1, MAX_PAGE));
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, page, setPage]
  );

  const filterTokens = useMemo(
    () =>
      tokens.filter((token) =>
        t(token.name).toLowerCase().includes(search.toLowerCase())
      ),
    [tokens, search, t]
  );

  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  if (!tokens.length && loading) {
    return (
      <div className="text-center py-4">
        <Loading className="bg-[#2cb67d]" />
      </div>
    );
  }

  return (
    <div dir="rtl" className="w-full overflow-x-auto">
      {filterTokens.length ? (
        <>
          <table className="w-full min-w-[1280px] border-collapse border border-zinc-700 bg-black text-right">
            <TableHeader />
            <tbody>
              {tokens.map((token: TableInterface, index: number) => (
                <TokenTableRow
                  ref={index === tokens.length - 1 ? lastTokenRef : null}
                  key={token.id}
                  index={index}
                  token={token}
                />
              ))}
            </tbody>
          </table>
          {loading && (
            <div className="text-center py-4">
              <Loading className="bg-[#2cb67d]" />
            </div>
          )}
        </>
      ) : (
        <div className="text-center text-lg text-[#2cb67d] w-full">
          ارزی یافت نشد
        </div>
      )}
    </div>
  );
};

export default TokensTable;
