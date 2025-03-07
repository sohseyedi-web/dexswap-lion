import TetherBox from "@/features/tetherprice/TetherBox";
import TetherExchange from "@/features/tetherprice/TetherExchange";
import { getUsdtPrice } from "@/service/tokenService";
import { Exchange, TetherData } from "@/types";
import Loading from "@/ui/Loading";
import { dynamicTetherData } from "@/utils/dynamicTetherData";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";
import { useEffect, useState } from "react";

const Tether = () => {
  const [item, setItem] = useState<TetherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedExchange, setSelectedExchange] = useState<Exchange>({
    name: "تترلند",
    id: 1,
    fetchFunction: getUsdtPrice,
  });

  const fetchTether = async () => {
    try {
      setLoading(true);
      const data = await selectedExchange.fetchFunction();
      const tether = await dynamicTetherData(data, selectedExchange.name);
      setItem(tether);
    } catch (error) {
      console.error("Error fetching tether price:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTether();
    const interval = setInterval(fetchTether, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, [selectedExchange]);

  return (
    <section className="max-w-7xl mx-auto mt-5 lg:px-0 px-6 pb-6" dir="rtl">
      <header className="mb-5 flex items-center justify-between ">
        <h4 className="lg:text-xl text-lg font-semibold text-[#2cb67d]">
          قیمت آنلاین تتر
        </h4>
        <TetherExchange
          select={selectedExchange}
          setSelect={setSelectedExchange}
        />
      </header>
      <div className="flex items-center gap-3 md:my-3 my-6">
        <h6 className="font-semibold text-[#2cb67d] md:text-lg">
          صرافی {selectedExchange.name} :
        </h6>
        {loading ? (
          <Loading className="bg-[#2cb67d]" />
        ) : (
          <span className="md:text-xl text-sm">
            {toPersianNumbersWithComma(String(item?.price))} تومان
          </span>
        )}
      </div>
      {loading ? (
        <Loading className="bg-[#2cb67d]" />
      ) : (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          <TetherBox
            day={"1"}
            diffDay={item?.diff24d ?? ""}
            lastDayMax={item?.last24hMax ?? 0}
            lastDayMin={item?.last24hMin ?? 0}
          />
          {selectedExchange.id == 1 ? (
            <>
              <TetherBox
                day={"7"}
                diffDay={item?.diff7d ?? ""}
                lastDayMax={item?.last7dMax ?? 0}
                lastDayMin={item?.last7dMin ?? 0}
              />
              <TetherBox
                day={"30"}
                diffDay={item?.diff30d ?? ""}
                lastDayMax={item?.last30dMax ?? 0}
                lastDayMin={item?.last30dMin ?? 0}
              />
            </>
          ) : null}
        </div>
      )}
    </section>
  );
};

export default Tether;
