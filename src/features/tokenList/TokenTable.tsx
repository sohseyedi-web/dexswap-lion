import { TableInterface } from "@/types";
import { useGetTokensTable } from "@/hooks/useTokenTable";
import { tokenTHeads } from "@/constant/tokenHeadLists";
import TokenTableRow from "./TokenTableRow";
import { useTableStore } from "@/store/useTableStore";
import { useTranslation } from "react-i18next";
import Loading from "@/ui/Loading";

const TokensTable = () => {
  const { tokens, loading } = useGetTokensTable();
  const { search } = useTableStore();
  const { t } = useTranslation();

  const filterTokens = tokens.filter((token) => {
    const translatedName = t(token.name);
    const searchLower = search.toLowerCase();

    return translatedName.includes(searchLower);
  });

  if (loading) return <Loading className="bg-[#2cb67d]" />;

  return (
    <div className="" dir="rtl">
      {filterTokens?.length ? (
        <table className="w-full border-collapse  border border-zinc-700 bg-black text-right">
          <thead className="bg-zinc-900 rounded-2xl">
            <tr className="text-zinc-400 rounded-2xl">
              {tokenTHeads.map((t) => (
                <th
                  className={`${
                    t.id == 5 || t.id == 6 ? "hidden lg:table-cell" : null
                  } border border-zinc-800 p-2`}
                  key={t.id}
                >
                  {t.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterTokens.map((token: TableInterface, index: number) => (
              <TokenTableRow key={token.id} index={index} token={token} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className="text-center text-lg text-[#2cb67d] w-full">
          ارزی یافت نشد
        </div>
      )}
    </div>
  );
};

export default TokensTable;
