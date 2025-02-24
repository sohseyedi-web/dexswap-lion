import { RiSettings5Fill } from "react-icons/ri";
import { TbRefresh } from "react-icons/tb";
import { motion } from "framer-motion";
import ButtonAction from "@/ui/ButtonAction";

const SwapBox = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="lg:w-[33%] md:w-[60%] space-y-4 w-[90%] mx-auto p-5 border border-zinc-800 rounded-2xl bg-[#212121] hover:shadow-xl transition-all duration-300"
    >
      <header className="flex items-center justify-between" dir="rtl">
        <h3 className="text-xl text-[#2cb67d] font-semibold">مبادله ارز</h3>
        <div className="flex items-center gap-x-3">
          <RiSettings5Fill
            size={23}
            className="cursor-pointer text-zinc-300 hover:text-[#2cb67d] rotate-0 hover:rotate-180 transition-all duration-300"
          />
          <TbRefresh
            size={23}
            className="cursor-pointer text-zinc-300 hover:text-[#2cb67d] rotate-0 hover:rotate-180 transition-all duration-300"
          />
        </div>
      </header>
      <form action="" className="space-y-4 flex-col">
        <input
          type="text"
          className="w-full h-[55px] outline-none bg-transparent border rounded-2xl focus:border-zinc-600 transition-all duration-300 border-zinc-800 focus:bg-[#161616] px-3 text-lg "
        />
        <input
          type="text"
          className="w-full h-[55px] outline-none bg-transparent border rounded-2xl focus:border-zinc-600 transition-all duration-300 border-zinc-800 focus:bg-[#161616] px-3 text-lg "
        />
        <ButtonAction
          loading={false}
          className="w-full h-[55px]"
          child="انجام معامله"
        />
      </form>
    </motion.div>
  );
};

export default SwapBox;
