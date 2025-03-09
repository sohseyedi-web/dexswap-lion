import { useTableStore } from "@/store/useTableStore";
import { RiSearchLine } from "react-icons/ri";

const TokenTableHeader = () => {
  const { setActive, active, search, setSearch } = useTableStore();

  return (
    <header className="flex items-center justify-between my-3" dir="rtl">
      <div className="relative w-full max-w-[300px]">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جستجوی ارز ..."
          className={`w-full pr-12 placeholder:text-zinc-500 outline-none md:h-[50px] h-[45px] rounded-2xl bg-transparent border border-zinc-700 transition-all duration-300`}
        />
        <RiSearchLine
          size={28}
          className="absolute text-emerald-700 top-3 right-2 rotate-90 cursor-pointer"
        />
      </div>
      <span
        className="cursor-pointer text-sm transition-all duration-200"
        onClick={() => setActive(!active)}
      >
        {active ? "دلار" : "تومان"}
      </span>
    </header>
  );
};

export default TokenTableHeader;
