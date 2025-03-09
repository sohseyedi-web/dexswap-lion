import { useMemo } from "react";
import { TableInterface } from "@/types";
import { useGetTokensTable } from "@/hooks/useTokenTable";
import { tokenTHeads } from "@/constant/tokenHeadLists";
import TokenTableRow from "./TokenTableRow";
import { useTableStore } from "@/store/useTableStore";
import { useTranslation } from "react-i18next";
import Loading from "@/ui/Loading";

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
  const { search } = useTableStore();
  const { t } = useTranslation();

  const filterTokens = useMemo(
    () =>
      tokens.filter((token) =>
        t(token.name).toLowerCase().includes(search.toLowerCase())
      ),
    [tokens, search, t]
  );

  if (loading) {
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
              {filterTokens.map((token: TableInterface, index: number) => (
                <TokenTableRow key={token.id} index={index} token={token} />
              ))}
            </tbody>
          </table>
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
