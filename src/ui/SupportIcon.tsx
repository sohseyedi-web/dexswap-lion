import { BiSupport } from "react-icons/bi";
import ButtonAction from "./ButtonAction";
import { motion } from "framer-motion";

const SupportIcon = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 left-6"
    >
      <ButtonAction
        className="w-[45px] h-[45px] flex items-center justify-center"
        loading={false}
        child={<BiSupport size={30} />}
      />
    </motion.div>
  );
};

export default SupportIcon;
