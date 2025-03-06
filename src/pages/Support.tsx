import ButtonAction from "@/ui/ButtonAction";
import MotionBox from "@/ui/MotionBox";
import { useState } from "react";

const Support = () => {
  const [supportData, setSupportData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSupportData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <MotionBox>
      <form className="space-y-4" dir="rtl">
        <input
          type="email"
          value={supportData.email}
          onChange={onChangeHandler}
          className="w-full h-[45px] rounded-2xl bg-transparent border border-zinc-700 px-3 outline-none transition-all"
          placeholder="ایمیل خود را وارد کنید"
        />
        <input
          type="text"
          value={supportData.subject}
          onChange={onChangeHandler}
          className="w-full h-[45px] rounded-2xl bg-transparent border border-zinc-700 px-3 outline-none transition-all"
          placeholder="موضوع درخواست رو بنویسید"
        />

        <textarea
          value={supportData.message}
          onChange={onChangeHandler}
          className="w-full h-[140px]  rounded-2xl bg-transparent border border-zinc-700 p-3 outline-none transition-all resize-none"
          placeholder="پیام خود را وارد کنید"
        />
        <ButtonAction
          child="ارسال درخواست"
          loading={false}
          className="w-full h-[45px]"
        />
      </form>
    </MotionBox>
  );
};

export default Support;
