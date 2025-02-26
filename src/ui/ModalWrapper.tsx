import { motion, AnimatePresence } from "framer-motion";
import { ReactNode } from "react";
import { RiCloseLine } from "react-icons/ri";

type ModalPropTypes = {
  isOpen: boolean;
  children: ReactNode;
  onClose: () => void;
  title: string;
};

const ModalWrapper = ({ isOpen, onClose, children, title }: ModalPropTypes) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          dir="rtl"
        >
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative bg-[#212121] rounded-xl p-4 shadow-lg lg:w-[33%] md:w-[60%] w-[90%]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="space-y-4 p-2">
              <div className="flex items-center justify-between">
                <h4 className="text-xl font-semibold text-[#2cb67d]">
                  {title}
                </h4>
                <RiCloseLine
                  size={28}
                  className="cursor-pointer"
                  onClick={onClose}
                />
              </div>
              <div className="my-2">{children}</div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ModalWrapper;
