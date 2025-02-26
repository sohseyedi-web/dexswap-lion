import { FieldTokenTypes } from "@/types";
import ModalWrapper from "@/ui/ModalWrapper";
import { RiArrowDownSLine } from "react-icons/ri";
import TokenListBox from "./TokenListBox";
import { useState } from "react";

const FieldToken = ({ title }: FieldTokenTypes) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="p-3 rounded-2xl border border-zinc-800" dir="rtl">
      <div className="flex items-center gap-x-2">
        <span className=" text-[#2cb67d] opacity-90 font-semibold">
          توکن {title}
        </span>
        <span className="font-bold"> : USDT</span>
      </div>
      <div className="flex md:items-center md:flex-row flex-col justify-center gap-x-3 my-2">
        <div onClick={() => setIsOpen(true)} className="md:h-[50px] h-[40px] lg:w-[35%] w-[60%] bg-black rounded-2xl md:mb-0 mb-3 cursor-pointer px-2 flex items-center justify-between">
          {/* <div className="flex items-center gap-x-3 mr-1">
            <span>s</span>
            <span>تتر</span>
          </div> */}
          <span className="text-sm">انتخاب توکن</span>
          <RiArrowDownSLine size={25} />
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
          {" "}
          90/000 تومان
        </span>
      </p>
      <ModalWrapper
        title="لیست ارز ها"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <TokenListBox />
      </ModalWrapper>
    </section>
  );
};

export default FieldToken;
