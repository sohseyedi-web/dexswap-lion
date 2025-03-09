import { motion } from "framer-motion";
import { useMemo } from "react";

const MotionBox = ({ children }: { children: React.ReactNode }) => {
  const motionProps = useMemo(
    () => ({
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.3 },
    }),
    []
  );

  return (
    <motion.div
      dir="rtl"
      {...motionProps}
      className="lg:w-[33%] md:w-[60%] space-y-4 md:mt-0 mt-10 w-[90%] md:p-5 p-4 border border-zinc-800 rounded-2xl bg-[#212121] hover:shadow-xl transition-all duration-300"
    >
      {children}
    </motion.div>
  );
};

export default MotionBox;
