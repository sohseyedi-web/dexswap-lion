import { useState } from "react";
import { RiInformation2Line } from "react-icons/ri";
import ModalWrapper from "@/ui/ModalWrapper";
import { useTokenStore } from "@/store/useTokenStore";

type TokenType = {
  isToken: string;
  address: string;
};

const TokenPriceContent = ({ isToken, address }: TokenType) => {
  const { token1Price, token2Price } = useTokenStore();
  const [isOpen, setIsOpen] = useState(false);

  const showToken =
    address === token1Price?.tokenAddress ? token1Price : token2Price;

  return (
    <div className={`${isToken ? "visible" : "invisible"} flex items-center justify-between pt-2`}>
      <p className={`text-sm text-zinc-400 transition-all`}>
        قیمت :{" "}
        <span className="font-semibold text-[#2cb67d] md:ml-2">
          {showToken?.usdPriceFormatted} $
        </span>
      </p>
      <div className="flex items-center gap-x-2 text-[#2cb67d]">
        <span className="cursor-pointer text-sm">تومان</span>
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
        <div>oheils</div>
      </ModalWrapper>
    </div>
  );
};

export default TokenPriceContent;
