import cn from "@/utils/cn";
import { ClassValue } from "clsx";

const Loading = ({ className }: { className: ClassValue }) => {
  return (
    <div className="flex items-center justify-center gap-x-2">
      <div className={cn("size-3 rounded-full animate-pulse", className)}></div>
      <div className={cn("size-3 rounded-full animate-pulse", className)}></div>
      <div className={cn("size-3 rounded-full animate-pulse", className)}></div>
    </div>
  );
};

export default Loading;
