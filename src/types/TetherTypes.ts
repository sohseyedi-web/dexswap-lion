export type Exchange = {
  id: number;
  name: string;
  fetchFunction: () => Promise<any>;
};

export interface TetherData {
  price: number;
  diff24d: string;
  last24hMax: number;
  last24hMin: number;
  diff7d?: string;
  last7dMax?: number;
  last7dMin?: number;
  diff30d?: string;
  last30dMax?: number;
  last30dMin?: number;
}

export interface TetherLandData {
  USDT: {
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
  };
}



export interface ExirData {
  high: number;
  low: number;
  last: number;
}

export interface OKData {
  last: string;
  high_24h: number;
  low_24h: number;
}

export interface WallexData {
  result: {
    symbols: {
      [key: string]: {
        stats: {
          lastPrice: string;
          "24h_highPrice": string;
          "24h_lowPrice": string;
        };
      };
    };
  };
}

export type ExchangeData =
  | TetherLandData
  | ExirData
  | WallexData
  | OKData;
