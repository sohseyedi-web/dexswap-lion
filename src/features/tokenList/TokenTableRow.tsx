import { useTableStore } from "@/store/useTableStore";
import { useTokenStore } from "@/store/useTokenStore";
import { TableInterface } from "@/types";
import { formatPrice } from "@/utils/formatPrice";
import { toPersianNumbers } from "@/utils/toPersianNumber";
import { useTranslation } from "react-i18next";

type TokenTableRow = {
  token: TableInterface;
  index: number;
};

const TokenTableRow = ({ token, index }: TokenTableRow) => {
  const { t } = useTranslation();
  const { active } = useTableStore();
  const { toman } = useTokenStore();

  const formatPriceWithCurrency = (price: number) => {
    const formattedPrice = formatPrice(price * (active ? toman : 1));
    return active ? formattedPrice : `${formattedPrice}$`;
  };

  return (
    <tr className="hover:bg-slate-950 border-zinc-900 border transition-all duration-300 cursor-pointer">
      <td className="border-zinc-900 border text-center p-2 w-12 whitespace-nowrap">
        {toPersianNumbers(String(index + 1))}
      </td>
      <td className="border-zinc-900 border p-2 min-w-[200px]">
        <div className="flex items-center gap-2">
          <img
            src={token.image}
            className="object-cover size-10 rounded-xl flex-shrink-0"
            alt={token.name}
            loading="lazy"
          />
          <span className="whitespace-nowrap">{t(token.name)}</span>
        </div>
      </td>
      <td className="border-zinc-900 border p-2 whitespace-nowrap">
        {token.symbol.toUpperCase()}
      </td>
      <td className="border-zinc-900 border text-green-600 font-bold p-2 whitespace-nowrap">
        {formatPriceWithCurrency(Number(token.current_price))}
      </td>
      <td className="border border-zinc-900 p-2 whitespace-nowrap">
        {formatPriceWithCurrency(Number(token.high_24h))}
      </td>
      <td className="border border-zinc-900 p-2 whitespace-nowrap">
        {formatPriceWithCurrency(Number(token.low_24h))}
      </td>
      <td
        className={`border border-zinc-900 p-2 font-bold whitespace-nowrap ${
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
