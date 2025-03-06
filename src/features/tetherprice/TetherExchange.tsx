import { useState } from "react";
import ButtonAction from "@/ui/ButtonAction";
import { motion } from "framer-motion";

type Exchange = {
  id: number;
  name: string;
};

type TetherTypes = {
  select: Exchange;
  setSelect: React.Dispatch<React.SetStateAction<Exchange>>;
};

const options: Exchange[] = [
  { id: 1, name: "تترلند" },
  { id: 2, name: "اوکی اکسچنج" },
  { id: 3, name: "والکس" },
  { id: 4, name: "نوبیتکس" },
  { id: 5, name: "اکسیر" },
];

const TetherExchange = ({ select, setSelect }: TetherTypes) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-[150px]">
      <ButtonAction
        loading={false}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full lg:text-lg text-base lg:h-[50px] h-[45px] bg-transparent text-[#2cb67d] border-zinc-800 flex items-center justify-center"
        child={select.name}
      />
      <motion.ul
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className={`absolute w-full text-center mt-2 border-2 bg-black rounded-2xl border-zinc-800 overflow-hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {options.map((option) => (
          <li
            key={option.id}
            className="px-4 py-2 cursor-pointer hover:bg-zinc-800 flex items-center justify-center gap-x-2"
            onClick={() => setSelect(option)}
          >
            {option.name}
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default TetherExchange;
