import { useState } from "react";
import { RiFilter3Fill, RiSearchLine } from "react-icons/ri";

const TokenTableHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="flex items-center justify-between my-3" dir="rtl">
      <div className="relative w-full max-w-[300px]">
        <input
          type="text"
          placeholder="جستجوی ارز ..."
          className={`w-full pr-12 placeholder:text-zinc-500 outline-none h-[50px] rounded-2xl bg-transparent border border-zinc-700 transition-all duration-300 ${
            showSearch
              ? "opacity-100 w-full"
              : "opacity-0 w-0 md:w-full md:opacity-100"
          }`}
        />
        <RiSearchLine
          size={28}
          className="absolute text-emerald-700 top-3 right-2 rotate-90 cursor-pointer"
          onClick={() => setShowSearch(!showSearch)}
        />
      </div>

      <div className="flex items-center gap-x-2 text-[#2cb67d]">
        <span
          className="cursor-pointer text-sm transition-all duration-200"
          onClick={() => setIsActive(!isActive)}
        >
          {isActive ? "دلار" : "تومان"}
        </span>
        <RiFilter3Fill size={28} className="cursor-pointer"/>
      </div>
    </header>
  );
};

export default TokenTableHeader;
