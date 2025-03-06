import { useState } from "react";
import { RiInformation2Line } from "react-icons/ri";
import ModalWrapper from "@/ui/ModalWrapper";
import { useTokenStore } from "@/store/useTokenStore";
import { TokenInterFace } from "@/types";
import { formatPrice } from "@/utils/formatPrice";
import TokenInfoModal from "./TokenInfoModal";

type TokenPriceType = {
  token: TokenInterFace;
  amount: string;
};

const TokenPriceContent = ({ token, amount }: TokenPriceType) => {
  const { token1Price, token2Price, toman } = useTokenStore();
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const showToken =
    token?.address === token1Price?.tokenAddress ? token1Price : token2Price;

  const priceWithAmount = toman * Number(amount);

  return (
    <div
      className={`${
        token?._id && amount ? "visible opacity-100" : "invisible opacity-0"
      } transition-opacity flex items-center justify-between pt-2`}
    >
      <p className="text-sm text-zinc-400 transition-all">
        قیمت :
        <span className="font-semibold text-[#2cb67d] md:ml-2 transition-all duration-200">
          {isActive
            ? `${formatPrice(
                showToken?.usdPrice * Number(priceWithAmount)
              )} تومان`
            : `${formatPrice(showToken?.usdPrice * Number(amount))} $`}
        </span>
      </p>
      <div className="flex items-center gap-x-2 text-[#2cb67d]">
        <span
          className="cursor-pointer text-sm transition-all duration-200"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "دلار" : "تومان"}
        </span>
        <RiInformation2Line
          size={20}
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>
      <ModalWrapper
        title="اطلاعات ارز"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <TokenInfoModal showToken={showToken} chain={token?.chain} />
      </ModalWrapper>
    </div>
  );
};

export default TokenPriceContent;
