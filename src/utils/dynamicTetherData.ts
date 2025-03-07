import {
  ExchangeData,
  ExirData,
  OKData,
  TetherData,
  TetherLandData,
  WallexData,
} from "@/types";

export const dynamicTetherData = (
  data: ExchangeData,
  exchangeName: string
): TetherData => {
  switch (exchangeName) {
    case "تترلند": {
      const tetherlandData = data as TetherLandData;
      return {
        price: tetherlandData.USDT.price,
        diff24d: tetherlandData.USDT.diff24d,
        last24hMax: tetherlandData.USDT.last24hMax,
        last24hMin: tetherlandData.USDT.last24hMin,
        diff7d: tetherlandData.USDT.diff7d,
        last7dMax: tetherlandData.USDT.last7dMax,
        last7dMin: tetherlandData.USDT.last7dMin,
        diff30d: tetherlandData.USDT.diff30d,
        last30dMax: tetherlandData.USDT.last30dMax,
        last30dMin: tetherlandData.USDT.last30dMin,
      };
    }

    case "اوکی اکسچنج": {
      const okData = data as OKData;
      return {
        price: parseFloat(okData.last),
        diff24d: "",
        last24hMax: okData.high_24h,
        last24hMin: okData.low_24h,
        diff7d: "",
        last7dMax: 0,
        last7dMin: 0,
        diff30d: "",
        last30dMax: 0,
        last30dMin: 0,
      };
    }

    case "اکسیر": {
      const exirData = data as ExirData;
      return {
        price: exirData.last,
        diff24d: "",
        last24hMax: exirData.high,
        last24hMin: exirData.low,
        diff7d: "",
        last7dMax: 0,
        last7dMin: 0,
        diff30d: "",
        last30dMax: 0,
        last30dMin: 0,
      };
    }

    case "والکس": {
      const wallexData = data as WallexData;
      const wallexSymbol = wallexData.result.symbols["USDTTMN"];
      return {
        price: parseFloat(wallexSymbol.stats.lastPrice) ?? 0,
        diff24d: "",
        last24hMax: parseFloat(wallexSymbol.stats["24h_highPrice"]) ?? 0,
        last24hMin: parseFloat(wallexSymbol.stats["24h_lowPrice"]) ?? 0,
        diff7d: "",
        last7dMax: 0,
        last7dMin: 0,
        diff30d: "",
        last30dMax: 0,
        last30dMin: 0,
      };
    }

    default:
      return {
        price: 0,
        diff24d: "",
        last24hMax: 0,
        last24hMin: 0,
        diff7d: "",
        last7dMax: 0,
        last7dMin: 0,
        diff30d: "",
        last30dMax: 0,
        last30dMin: 0,
      };
  }
};
