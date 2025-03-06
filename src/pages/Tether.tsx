import TetherBox from "@/features/tetherprice/TetherBox";
import { getUsdtPrice } from "@/service/tokenService";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumber";
import { useEffect, useState } from "react";

interface TetherData {
  price: number;
  diff24d: string;
  diff7d: string;
  diff30d: string;
  last24h: number;
  last24hMin: number;
  last24hMax: number;
  last7d: number;
  last7dMin: number;
  last7dMax: number;
  last30d: number;
  last30dMin: number;
  last30dMax: number;
}

const Tether = () => {
  const [item, setItem] = useState<TetherData | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchTether = async () => {
    try {
      setLoading(true);
      const tether = await getUsdtPrice();
      setItem(tether?.USDT as TetherData);
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
  }, []);

  return (
    <section className="max-w-7xl mx-auto mt-5 lg:px-0 px-6 pb-6" dir="rtl">
      <header className="mb-5 flex items-center gap-x-3">
        <h4 className="lg:text-xl text-lg font-semibold text-[#2cb67d]">
          قیمت آنلاین تتر :
        </h4>
        {loading ? (
          <span>در حال بارگذاری...</span>
        ) : (
          <span className="lg:text-xl">
            {toPersianNumbersWithComma(String(item?.price))} تومان
          </span>
        )}
      </header>
      <h6 className="font-semibold text-[#2cb67d] text-lg mb-3">صرافی تترلند</h6>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
        <TetherBox
          day={"1"}
          diffDay={item?.diff24d ?? ""}
          lastDayMax={item?.last24hMax ?? 0}
          lastDayMin={item?.last24hMin ?? 0}
        />
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
      </div>
    </section>
  );
};

export default Tether;
