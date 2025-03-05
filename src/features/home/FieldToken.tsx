import { FieldTokenTypes } from "@/types";
import ModalWrapper from "@/ui/ModalWrapper";
import { RiArrowDownSLine, RiArrowUpDownLine } from "react-icons/ri";
import TokenListBox from "./token/TokenListBox";
import { useEffect, useState } from "react";
import { useTokenStore } from "@/store/useTokenStore";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";

const FieldToken = ({
  title,
  number,
  token,
  value,
  onChange,
  children,
}: FieldTokenTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setActiveToken, swapTokens, token1, token2 } = useTokenStore();
  const { t } = useTranslation();

  const handleTokenSelect = () => {
    setActiveToken(number === 1 ? 1 : 2);
    setIsOpen(true);
  };

  const handleSwapTokens = () => {
    swapTokens();
    toast.success("ارزها جابجا شدند");
  };

  const showSwapButton = number === 1 && token1?._id && token2?._id;

  useEffect(() => {
    if (!token?._id && value) {
      onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  }, [token]);

  const renderTokenContent = () => {
    if (token?._id) {
      return (
        <div className="flex items-center justify-between w-full transition-all">
          <img
            src={token.img}
            alt={t(token.name)}
            className="w-6 h-6 object-cover"
          />
          <span>{t(token.name)}</span>
          <RiArrowDownSLine size={25} />
        </div>
      );
    }
    return (
      <>
        <span className="text-sm">انتخاب توکن</span>
        <RiArrowDownSLine size={25} />
      </>
    );
  };

  return (
    <section className="p-3 rounded-2xl border border-zinc-800" dir="rtl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <span className="text-[#2cb67d] opacity-90 font-semibold">
            توکن {title}
          </span>
          {token?._id && <span className="font-bold"> : {token.symbol}</span>}
        </div>
        {showSwapButton && (
          <button
            onClick={handleSwapTokens}
            type="button"
            className="p-1 rounded-2xl bg-[#2cb67d] hover:rotate-180 transition-all duration-300 rotate-0"
          >
            <RiArrowUpDownLine size={22} />
          </button>
        )}
      </div>
      <div className="flex md:items-center md:flex-row flex-col justify-center gap-x-3 my-2">
        <div
          onClick={handleTokenSelect}
          className="md:h-[50px] h-[40px] lg:w-[45%] w-[60%] bg-black rounded-2xl md:mb-0 mb-3 cursor-pointer px-2 flex items-center justify-between"
        >
          {renderTokenContent()}
        </div>
        <input
          type="text"
          value={value}
          onChange={onChange}
          readOnly={number !== 1}
          className="w-full md:text-lg text-base md:h-[50px] h-[40px] rounded-2xl bg-transparent outline-none border border-zinc-700 px-3"
        />
      </div>
      {children}
      <ModalWrapper
        title="لیست ارز ها"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <TokenListBox onClose={() => setIsOpen(false)} />
      </ModalWrapper>
    </section>
  );
};

export default FieldToken;
