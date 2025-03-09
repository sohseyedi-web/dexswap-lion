import { motion, AnimatePresence } from "framer-motion";
import { useTableStore } from "@/store/useTableStore";
import { useTokenStore } from "@/store/useTokenStore";
import { TableInterface } from "@/types";
import { formatPrice } from "@/utils/formatPrice";
import { toPersianNumbers } from "@/utils/toPersianNumber";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { useMemo } from "react";

type TokenTableRowProps = {
  token: TableInterface;
  index: number;
};

const TokenTableRow = ({ token, index }: TokenTableRowProps) => {
  const { t } = useTranslation();
  const { active } = useTableStore();
  const { toman } = useTokenStore();

  const formatPriceWithCurrency = useMemo(
    () => (price: number) => {
      const formattedPrice = formatPrice(price * (active ? toman : 1));
      return active ? formattedPrice : `${formattedPrice}$`;
    },
    [active, toman]
  );

  const priceVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const PriceCell = ({
    value,
    isGreen = false,
  }: {
    value: number;
    isGreen?: boolean;
  }) => (
    <td
      className={clsx(
        "border-zinc-900 border p-2 font-bold relative overflow-hidden text-center",
        isGreen && "text-green-600"
      )}
      style={{ minWidth: "120px" }}
    >
      <div className="relative" style={{ height: "24px" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={value}
            variants={priceVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.2 }}
            className="absolute w-full left-0"
          >
            {formatPriceWithCurrency(value)}
          </motion.div>
        </AnimatePresence>
      </div>
    </td>
  );

  return (
    <tr className="hover:bg-slate-950 border-zinc-900 border transition-all duration-300 cursor-pointer">
      <td className="border-zinc-900 border text-center p-2 w-12">
        {toPersianNumbers(String(index + 1))}
      </td>
      <td className="border-zinc-900 border p-2">
        <div className="flex items-center gap-2">
          <img
            src={token.image}
            className="object-cover size-10 rounded-xl flex-shrink-0"
            alt={`${token.name} logo`}
            loading="lazy"
          />
          <span className="whitespace-nowrap">{t(token.name)}</span>
        </div>
      </td>
      <td className="border-zinc-900 border p-2 text-center">
        {token.symbol.toUpperCase()}
      </td>
      <PriceCell value={Number(token.current_price)} isGreen />
      <PriceCell value={Number(token.high_24h)} />
      <PriceCell value={Number(token.low_24h)} />
      <td
        className={clsx(
          "border border-zinc-900 p-2 font-bold text-center",
          token.price_change_percentage_24h > 0
            ? "text-green-500"
            : "text-red-500"
        )}
      >
        {toPersianNumbers(token.price_change_percentage_24h.toFixed(2))}%
      </td>
    </tr>
  );
};

TokenTableRow.displayName = "TokenTableRow";
export default TokenTableRow;
