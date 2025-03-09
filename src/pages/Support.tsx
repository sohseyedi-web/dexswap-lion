import ButtonAction from "@/ui/ButtonAction";
import MotionBox from "@/ui/MotionBox";
import { useState } from "react";
import { TbRefresh } from "react-icons/tb";

const Support = () => {
  const [supportData, setSupportData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const clearField = () => {
    setSupportData({
      email: "",
      subject: "",
      message: "",
    });
  };

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setSupportData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="flex items-center justify-center h-[80vh]">
      <MotionBox>
        <header className="flex items-center justify-between">
          <h3 className="lg:text-xl text-lg text-[#2cb67d] font-semibold">
            پشتیبانی
          </h3>
          <TbRefresh
            onClick={clearField}
            size={23}
            className="cursor-pointer text-zinc-300 hover:text-[#2cb67d] rotate-0 hover:rotate-180 transition-all duration-300"
          />
        </header>
        <form className="space-y-4">
          <input
            type="email"
            name="email"
            value={supportData.email}
            onChange={onChangeHandler}
            className="w-full md:h-[50px] h-[45px] md:text-base text-sm rounded-2xl bg-transparent border border-zinc-700 px-3 outline-none transition-all"
            placeholder="ایمیل خود را وارد کنید"
          />
          <input
            type="text"
            name="subject"
            value={supportData.subject}
            onChange={onChangeHandler}
            className="w-full md:h-[50px] h-[45px] md:text-base text-sm rounded-2xl bg-transparent border border-zinc-700 px-3 outline-none transition-all"
            placeholder="موضوع درخواست رو بنویسید"
          />
          <textarea
            name="message"
            value={supportData.message}
            onChange={onChangeHandler}
            className="w-full h-[140px] rounded-2xl md:text-base text-sm bg-transparent border border-zinc-700 p-3 outline-none transition-all resize-none"
            placeholder="پیام خود را وارد کنید"
          />
          <ButtonAction
            child="ارسال درخواست"
            loading={false}
            className="w-full md:h-[55px] h-[45px]"
          />
        </form>
      </MotionBox>
    </section>
  );
};

export default Support;
