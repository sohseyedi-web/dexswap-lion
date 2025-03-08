import { TableInterface } from "@/types";
import { formatPrice } from "@/utils/formatPrice";
import { toPersianNumbers } from "@/utils/toPersianNumber";

const TokenTableRow = ({
  token,
  index,
}: {
  token: TableInterface;
  index: number;
}) => {
  return (
    <tr
      key={token.id}
      className="hover:bg-slate-950 border-zinc-900 border transition-all duration-300 cursor-pointer"
    >
      <td className="border-zinc-900 border text-center p-2 w-12">
        {toPersianNumbers(String(index + 1))}
      </td>
      <td className="flex items-center gap-2 p-2 flex-1">
        <img
          src={token.image}
          className="object-cover size-10 rounded-xl"
          alt={token.name}
          loading="lazy"
        />
        {token.name}
      </td>
      <td className="border-zinc-900 border p-2">
        {token.symbol.toUpperCase()}
      </td>
      <td className="border-zinc-900 border text-green-600 font-bold p-2">
        ${formatPrice(Number(token.current_price))}
      </td>
      <td className="border hidden lg:table-cell border-zinc-900 p-2">
        ${formatPrice(token.high_24h)}
      </td>
      <td className="border hidden lg:table-cell border-zinc-900 p-2">
        ${formatPrice(token.low_24h)}
      </td>
      <td
        className={`border border-zinc-900 p-2 font-bold ${
          token.price_change_percentage_24h > 0
            ? "text-green-500"
            : "text-red-500"
        }`}
      >
        {toPersianNumbers(token.price_change_percentage_24h.toFixed(2))}%
      </td>
    </tr>
  );
};

export default TokenTableRow;
