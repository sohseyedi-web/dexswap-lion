import cn from "@/utils/cn";
import { ClassValue } from "clsx";
import { motion } from "framer-motion";
import React from "react";

type DropDownTypes<T> = {
  open: boolean;
  onClick: (value: T) => void;
  type: string;
  children: React.ReactNode;
  className: ClassValue;
  options: {
    id?: number;
    icon?: JSX.Element;
    name: string;
    chain?: "eth" | "bsc";
  }[];
};

const DropDownWapper = <T,>({
  open,
  options,
  onClick,
  type,
  children,
  className,
}: DropDownTypes<T>) => {
  return (
    <div className={cn(`relative`, className)}>
      {children}
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: open ? 1 : 0, y: open ? 0 : -10 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className={`absolute w-full text-center mt-2 border-2 bg-black rounded-2xl border-zinc-800 overflow-hidden ${
          open ? "block" : "hidden"
        }`}
      >
        {options.map((option) => (
          <li
            key={option.id || option.chain}
            className="px-4 py-2 cursor-pointer hover:bg-zinc-800 flex items-center justify-center gap-x-2"
            onClick={() =>
              onClick(type === "chain" ? (option.chain as T) : (option as T))
            }
          >
            {type === "chain" ? (
              <>
                <span>{option.icon}</span>
                <span className="lg:block hidden">{option.name}</span>
              </>
            ) : (
              option.name
            )}
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default DropDownWapper;
