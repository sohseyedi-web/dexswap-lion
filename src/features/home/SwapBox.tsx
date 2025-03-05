import { RiSettings5Fill } from "react-icons/ri";
import { TbRefresh } from "react-icons/tb";
import { motion } from "framer-motion";
import ButtonAction from "@/ui/ButtonAction";
import FieldToken from "./FieldToken";
import { useTokenStore } from "@/store/useTokenStore";
import { useCallback, useEffect, useMemo, useState } from "react";
import TokenPriceContent from "./token/TokenPriceContent";

const SwapBox = () => {
  const { token1, token2, clearTokens, token1Price, token2Price } = useTokenStore();
  const [tokenAmountOne, setTokenAmountOne] = useState<string>("");
  const [tokenAmountTwo, setTokenAmountTwo] = useState<string>("");

  const onClear = useCallback(() => {
    clearTokens();
    setTokenAmountOne("");
    setTokenAmountTwo("");
  }, [clearTokens]);

  useEffect(() => {
    if (tokenAmountOne && token1Price?.usdPrice && token2Price?.usdPrice) {
      const calculated =
        (parseFloat(tokenAmountOne) * token1Price.usdPrice) /
        token2Price.usdPrice;
      setTokenAmountTwo(calculated.toFixed(6));
    } else {
      setTokenAmountTwo("");
    }
  }, [tokenAmountOne, token1Price?.usdPrice, token2Price?.usdPrice]);

  const handleAmountOneChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTokenAmountOne(e.target.value);
  }, []);

  const handleAmountTwoChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setTokenAmountTwo(e.target.value);
  }, []);

  const motionProps = useMemo(() => ({
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3 }
  }), []);

  return (
    <motion.div
      {...motionProps}
      className="lg:w-[33%] md:w-[60%] space-y-4 md:mt-0 mt-10 w-[90%] p-5 border border-zinc-800 rounded-2xl bg-[#212121] hover:shadow-xl transition-all duration-300"
    >
      <header className="flex items-center justify-between" dir="rtl">
        <h3 className="text-xl text-[#2cb67d] font-semibold">مبادله ارز</h3>
        <div className="flex items-center gap-x-3">
          <RiSettings5Fill
            size={23}
            className="cursor-pointer text-zinc-300 hover:text-[#2cb67d] rotate-0 hover:rotate-180 transition-all duration-300"
          />
          <TbRefresh
            onClick={onClear}
            size={23}
            className="cursor-pointer text-zinc-300 hover:text-[#2cb67d] rotate-0 hover:rotate-180 transition-all duration-300"
          />
        </div>
      </header>
      <form action="" className="space-y-4 flex-col">
        <FieldToken
          title="انتخابی"
          number={1}
          token={token1}
          value={tokenAmountOne}
          onChange={handleAmountOneChange}
        >
          <TokenPriceContent token={token1} amount={tokenAmountOne} />
        </FieldToken>
        <FieldToken
          title="تبدیلی"
          number={2}
          token={token2}
          value={tokenAmountTwo}
          onChange={handleAmountTwoChange}
        >
          <TokenPriceContent token={token2} amount={tokenAmountTwo} />
        </FieldToken>
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
