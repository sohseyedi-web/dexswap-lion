import { TokenInterFace } from "@/types";
import { TiPinOutline } from "react-icons/ti";
import { useTranslation } from "react-i18next";
import Loading from "@/ui/Loading";
type TokenProps = {
  token: TokenInterFace;
  onChoice: (value: TokenInterFace) => void;
  loading: boolean;
};

const TokenItem = ({ token, onChoice, loading }: TokenProps) => {
  const { t } = useTranslation();

  return (
    <div
      className={`${
        loading ? "justify-center" : "justify-between"
      } flex items-center mb-2 h-12  transition-all duration-300`}
      onClick={() => onChoice(token)}
      key={token._id}
    >
      {loading ? (
        <Loading className="bg-[#2cb67d]" />
      ) : (
        <>
          <div className="flex items-center cursor-pointer gap-x-3">
            <img
              src={token.img}
              className="object-cover size-10 rounded-xl"
              alt={token.name}
              loading="lazy"
            />
            <div>
              <h3 className="font-semibold">{t(token.name)}</h3>
              <span className="text-sm text-zinc-500">{token.symbol}</span>
            </div>
          </div>
          <TiPinOutline size={28} className="cursor-pointer" />
        </>
      )}
    </div>
  );
};

export default TokenItem;
