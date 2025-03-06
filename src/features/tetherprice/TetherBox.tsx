import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumber";

type TetherItem = {
  day: string;
  diffDay: string;
  lastDayMin: number;
  lastDayMax: number;
};

const TetherBox = ({ day, diffDay, lastDayMin, lastDayMax }: TetherItem) => {
  return (
    <div className="p-4 rounded-2xl border border-zinc-800">
      <h5 className="text-zinc-300 mb-2">
        تغییرات {toPersianNumbers(day)} روز گذشته
      </h5>
      <div className="flex flex-col gap-y-2">
        <span
          className={`${
            toPersianNumbers(diffDay) > "0"
              ? "text-emerald-500"
              : "text-red-500"
          }`}
        >
          {toPersianNumbers(diffDay)}%
        </span>
        <div className="text-sm  flex-col flex space-y-2">
          <span className="text-zinc-100 mx-1">
            کمترین: {toPersianNumbersWithComma(String(lastDayMin))} تومان
          </span>
          <span className="text-zinc-100 mx-1">
            بیشترین: {toPersianNumbersWithComma(String(lastDayMax))} تومان
          </span>
        </div>
      </div>
    </div>
  );
};

export default TetherBox;
