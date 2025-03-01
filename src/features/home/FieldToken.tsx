import { FieldTokenTypes } from "@/types";
import ModalWrapper from "@/ui/ModalWrapper";
import { RiArrowDownSLine } from "react-icons/ri";
import TokenListBox from "./TokenListBox";
import { useState } from "react";
import { useTokenStore } from "@/store/useTokenStore";
import { useTranslation } from "react-i18next";

const FieldToken = ({ title, number, token }: FieldTokenTypes) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setActiveToken } = useTokenStore();
  const { t } = useTranslation();

  const onOpen = () => {
    setActiveToken(number === 1 ? 1 : 2);
    setIsOpen(true);
  };

  return (
    <section className="p-3 rounded-2xl border border-zinc-800" dir="rtl">
      <div className="flex items-center gap-x-2">
        <span className="text-[#2cb67d] opacity-90 font-semibold">
          توکن {title}
        </span>
        {token?._id && <span className="font-bold"> : {token.symbol}</span>}
      </div>
      <div className="flex md:items-center md:flex-row flex-col justify-center gap-x-3 my-2">
        <div
          onClick={onOpen}
          className="md:h-[50px] h-[40px] lg:w-[45%] w-[60%] bg-black rounded-2xl md:mb-0 mb-3 cursor-pointer px-2 flex items-center justify-between"
        >
          {token?._id ? (
            <div className="flex items-center justify-between w-full">
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
          placeholder="0"
          className="w-full md:text-lg text-base md:h-[50px] h-[40px] rounded-2xl bg-transparent outline-none border border-zinc-700 px-3"
        />
      </div>
      <p className="text-sm text-zinc-400">
        قیمت :{" "}
        <span className="font-semibold text-[#2cb67d] md:ml-2">10.2 $ </span>{" "}
        معادل{" "}
        <span className="font-semibold text-[#2cb67d] md:mr-2">
          90/000 تومان
        </span>
      </p>
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
