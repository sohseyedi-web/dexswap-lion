import { useResponsiveStore } from "@/store/useResponsive";
import Back from "@/ui/Back";
import { Customlink } from "@/ui/CustomLink";
import { SiRobotframework } from "react-icons/si";

const Sidebar = () => {
  const { active } = useResponsiveStore();

  return (
    <>
      <Back />
      <aside
        dir="rtl"
        className={`${
          active ? "right-0 top-0" : "-right-64 top-0"
        } fixed z-40 w-[240px] bg-[#212121] h-screen border-l-2 border-zinc-800 py-6 px-4 space-y-3 transition-all duration-300`}
      >
        <div className="flex items-center gap-x-3">
          <SiRobotframework size={38} className="text-[#2cb67d]" />
          <h6 className="text-2xl font-semibold">لایون سواپ</h6>
        </div>
        <ul className="flex flex-col space-y-7 pt-7">
          <Customlink name="صفحه اصلی" to="/" />
          <Customlink name="توکن ها" to="/lists" />
          <Customlink name="قیمت تتر" to="/tether-price" />
          <Customlink name="پشتیبانی" to="/support" />
        </ul>
      </aside>
    </>
  );
};

export default Sidebar;
