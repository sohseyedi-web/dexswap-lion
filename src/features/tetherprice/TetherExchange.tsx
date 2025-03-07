import { useState } from "react";
import ButtonAction from "@/ui/ButtonAction";
import DropDownWapper from "@/ui/DropDownWapper";
import {
  getUsdtPrice,
  getUsdtPriceExir,
  getUsdtPriceOk,
  getUsdtPriceWallex,
} from "@/service/tokenService";
import { Exchange } from "@/types";
import toast from "react-hot-toast";

type TetherTypes = {
  select: Exchange;
  setSelect: React.Dispatch<React.SetStateAction<Exchange>>;
};

const options: Exchange[] = [
  { id: 1, name: "تترلند", fetchFunction: getUsdtPrice },
  { id: 2, name: "اوکی اکسچنج", fetchFunction: getUsdtPriceOk },
  { id: 3, name: "والکس", fetchFunction: getUsdtPriceWallex },
  { id: 5, name: "اکسیر", fetchFunction: getUsdtPriceExir },
];

const TetherExchange = ({ select, setSelect }: TetherTypes) => {
  const [isOpen, setIsOpen] = useState(false);

  const onSelectExchange = (value: Exchange) => {
    setIsOpen(false);
    setSelect(value);
    toast.success("صرافی تغییر کرد");
  };

  return (
    <DropDownWapper<Exchange>
      className="w-[150px]"
      open={isOpen}
      options={options}
      type="exchange"
      onClick={onSelectExchange}
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
