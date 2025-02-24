import cn from "@/utils/cn";
import { ClassValue } from "clsx";
import { ReactNode } from "react";

type ButtonActionTypes = {
  child: ReactNode;
  loading: boolean;
  className?: ClassValue;
};

const ButtonAction = ({ child, loading, className }: ButtonActionTypes) => {
  return (
    <button
      className={cn(
        " bg-[#2cb67d] text-lg font-semibold text-zinc-800 hover:text-[#2cb67d] hover:bg-transparent transition-all duration-300 border-2 border-[#2cb67d] rounded-2xl",
        className
      )}
    >
      {loading ? (
        <span className=" font-semibold text-sm animate-pulse">
          ... لطفا صبر کنید
        </span>
      ) : (
        child
      )}
    </button>
  );
};

export default ButtonAction;
