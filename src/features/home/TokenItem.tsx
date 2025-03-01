import { TokenInterFace } from "@/types";
import { TiPinOutline } from "react-icons/ti";
import { useTranslation } from "react-i18next";
type TokenProps = {
  token: TokenInterFace;
  onChoice: (value: TokenInterFace) => void;
};

const TokenItem = ({ token, onChoice }: TokenProps) => {
  const { t } = useTranslation();

  return (
    <div
      className="flex items-center justify-between mb-2"
      onClick={() => onChoice(token)}
      key={token._id}
    >
      <div className="flex items-center cursor-pointer gap-x-3">
        <img
          src={token.img}
          className="object-cover size-10 rounded-xl"
          alt={token.name}
          loading="lazy"
        />
        <div className="">
          <h3 className="font-semibold">{t(token.name)}</h3>
          <span className="text-sm text-zinc-500">{token.symbol}</span>
        </div>
      </div>
      <TiPinOutline size={28} className="cursor-pointer" />
    </div>
  );
};

export default TokenItem;
