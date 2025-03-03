import { useState } from "react";
import { SiEthereum, SiBinance } from "react-icons/si";
import ButtonAction from "@/ui/ButtonAction";
import { motion } from "framer-motion";
import { useTokenStore } from "@/store/useTokenStore";
import toast from "react-hot-toast";

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
  const { setChain, selectedChain } = useTokenStore();

  const selected =
    options.find((opt) => opt.chain === selectedChain)?.name || options[1].name;

  const onChangeChain = (value: "eth" | "bsc") => {
    setChain(value);
    setIsOpen(false);
    toast.success("شبکه تغییر کرد");
  };

  return (
    <div className="relative lg:w-[150px] w-[45px]">
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
            key={option.name}
            className="px-4 py-2 cursor-pointer hover:bg-zinc-800 flex items-center justify-center gap-x-2"
            onClick={() => onChangeChain(option.chain)}
          >
            <span>{option.icon}</span>
            <span className="lg:block hidden">{option.name}</span>
          </li>
        ))}
      </motion.ul>
    </div>
  );
}
