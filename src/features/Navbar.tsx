import ButtonAction from "@/ui/ButtonAction";
import { TbWallet } from "react-icons/tb";
import { SiRobotframework } from "react-icons/si";
import { RiUserLine, RiArrowRightWideFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useResponsiveStore } from "@/store/useResponsive";
import { Customlink } from "@/ui/CustomLink";

const Navbar = () => {
  const { setActive } = useResponsiveStore();

  const isLogin = false;

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full top-0 md:p-6 p-4 right-0 flex items-center justify-between"
      dir="rtl"
    >
      <div className="flex items-center">
        <RiArrowRightWideFill
          onClick={() => setActive(true)}
          size={38}
          className="text-[#2cb67d] cursor-pointer md:hidden block"
        />
        <SiRobotframework size={38} className="text-[#2cb67d] ml-10" />
        <div className="items-center gap-x-7 md:flex hidden">
          <Customlink name="صفحه اصلی" to="/" />
          <Customlink name="توکن ها" to="/a" />
          <Customlink name="ابزار ها" to="/b" />
          <Customlink name="پشتیبانی" to="/c" />
        </div>
      </div>
      <ButtonAction
        className="w-[180px] h-[50px] md:block hidden"
        child="اتصال به کیف پول"
        loading={false}
      />
      <ButtonAction
        className="w-[45px] h-[45px] md:hidden flex items-center justify-center"
        child={isLogin ? <RiUserLine size={30} /> : <TbWallet size={30} />}
        loading={false}
      />
    </motion.nav>
  );
};

export default Navbar;
