import { FieldTokenTypes } from "@/types";
import ModalWrapper from "@/ui/ModalWrapper";
import { RiArrowDownSLine, RiArrowUpDownLine } from "react-icons/ri";
import TokenListBox from "./token/TokenListBox";
import { useState } from "react";
import { useTokenStore } from "@/store/useTokenStore";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import TokenPriceContent from "./token/TokenPriceContent";

const FieldToken = ({ title, number, token }: FieldTokenTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setActiveToken, swapTokens, token1, token2 } = useTokenStore();
  const [value, setValue] = useState<string>("");
  const { t } = useTranslation();

  const onOpen = () => {
    setActiveToken(number === 1 ? 1 : 2);
    setIsOpen(true);
  };

  const onSwap = () => {
    swapTokens();
    toast.success("ارز ها جا به جا شدند");
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^\d*\.?\d*$/.test(inputValue)) {
      setValue(inputValue);
    }
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
        {number === 1 && token1?._id && token2?._id ? (
          <button
            onClick={onSwap}
            type="button"
            className="p-1 rounded-2xl bg-[#2cb67d] hover:rotate-180 transition-all duration-300 rotate-0"
          >
            <RiArrowUpDownLine size={22} />
          </button>
        ) : null}
      </div>
      <div className="flex md:items-center md:flex-row flex-col justify-center gap-x-3 my-2">
        <div
          onClick={onOpen}
          className="md:h-[50px] h-[40px] lg:w-[45%] w-[60%] bg-black rounded-2xl md:mb-0 mb-3 cursor-pointer px-2 flex items-center justify-between"
        >
          {token?._id ? (
            <div className="flex items-center justify-between w-full transition-all">
              <img
                src={token.img}
                alt={t(token.name)}
                className="w-6 h-6 object-cover"
              />
              <span>{t(token.name)}</span>
              <RiArrowDownSLine size={25} />
            </div>
          ) : (
            <>
              <span className="text-sm">انتخاب توکن</span>
              <RiArrowDownSLine size={25} />
            </>
          )}
        </div>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          readOnly={number == 2}
          placeholder="0"
          className={`${
            number === 2 ? "opacity-85" : "opacity-100"
          } w-full md:text-lg text-base md:h-[50px] h-[40px] rounded-2xl bg-transparent outline-none border border-zinc-700 px-3`}
        />
      </div>
      <TokenPriceContent token={token} amount={value} />
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
