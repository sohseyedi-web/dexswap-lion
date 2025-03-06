import { useState } from "react";
import ButtonAction from "@/ui/ButtonAction";
import DropDownWapper from "@/ui/DropDownWapper";

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
    <DropDownWapper
      className="w-[150px]"
      open={isOpen}
      options={options}
      type="exchange"
      onClick={setSelect}
    >
      <ButtonAction
        loading={false}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full lg:text-lg text-base lg:h-[50px] h-[45px] bg-transparent text-[#2cb67d] border-zinc-800 flex items-center justify-center"
        child={select.name}
      />
    </DropDownWapper>
  );
};

export default TetherExchange;
