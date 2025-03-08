import { TableInterface } from "@/types";
import { useGetTokensTable } from "@/hooks/useTokenTable";
import { tokenTHeads } from "@/constant/tokenHeadLists";
import TokenTableRow from "./TokenTableRow";

const TokensTable = () => {
  const { tokens, loading } = useGetTokensTable();

  return (
    <div className="overflow-x-auto" dir="rtl">
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
          {tokens.map((token: TableInterface, index: number) => (
            <TokenTableRow key={token.id} index={index} token={token} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TokensTable;
