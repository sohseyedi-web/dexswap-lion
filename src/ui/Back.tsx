import { useResponsiveStore } from "@/store/useResponsive";

const Back = () => {
  const { active, setActive } = useResponsiveStore();

  return (
    active && (
      <div
        className="fixed w-full h-full top-0 left-0 bg-[rgba(0,0,0,.5)] z-40 transition-all duration-300"
        onClick={() => setActive(!active)}
      ></div>
    )
  );
};

export default Back;
