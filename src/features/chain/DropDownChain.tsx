import { useState } from "react";
import { SiEthereum, SiBinance } from "react-icons/si";
import ButtonAction from "@/ui/ButtonAction";
import { useTokenStore } from "@/store/useTokenStore";
import toast from "react-hot-toast";
import DropDownWapper from "@/ui/DropDownWapper";

const options: { icon: JSX.Element; name: string; chain: "eth" | "bsc" }[] = [
  {
    icon: <SiBinance size={23} />,
    name: "بی ان بی",
    chain: "bsc",
  },
  {
    icon: <SiEthereum size={23} />,
    name: "اتریوم",
    chain: "eth",
  },
];

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const { setChain, selectedChain, clearTokens } = useTokenStore();

  const selected =
    options.find((opt) => opt.chain === selectedChain)?.name || options[1].name;

  const onChangeChain = (value: "eth" | "bsc") => {
    setChain(value);
    setIsOpen(false);
    toast.success("شبکه تغییر کرد");
    clearTokens();
  };

  return (
    <DropDownWapper
      className="lg:w-[150px] w-[45px]"
      open={isOpen}
      options={options}
      type="chain"
      onClick={onChangeChain}
    >
      <ButtonAction
        loading={false}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full lg:h-[50px] h-[45px] bg-transparent text-[#2cb67d] border-zinc-800 flex items-center justify-center"
        child={
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-x-2">
              {selectedChain === "eth" ? (
                <SiEthereum size={23} />
              ) : (
                <SiBinance size={23} />
              )}
              <span className="text-lg font-semibold lg:block hidden">
                {selected}
              </span>
            </div>
          </div>
        }
      />
    </DropDownWapper>
  );
}
