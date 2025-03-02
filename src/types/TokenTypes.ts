export interface TokenInterFace {
  _id: string;
  symbol: string;
  name: string;
  img: string;
  address: string;
  decimals: number;
  chain: string;
  rank: number;
  __v: number;
}

export interface TokenPriceInterFace {
  usdPrice: number;
  usdPriceFormatted: string;
  nativePrice: {
    value: string;
    decimals: number;
    name: string;
    symbol: string;
    address: string;
  };
  dayPercentChange: string;
  tokenAddress : string
}
