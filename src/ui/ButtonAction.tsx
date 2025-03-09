import cn from "@/utils/cn";
import { ClassValue } from "clsx";
import { ReactNode } from "react";

type ButtonActionTypes = {
  child: ReactNode;
  loading: boolean;
  className?: ClassValue;
  onClick?: () => void;
};

const ButtonAction = ({
  child,
  loading,
  className,
  onClick,
}: ButtonActionTypes) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        " bg-[#2cb67d] lg:text-lg text-base font-semibold text-zinc-800 hover:text-[#2cb67d] hover:bg-transparent transition-all duration-300 border-2 border-[#2cb67d] rounded-2xl",
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
