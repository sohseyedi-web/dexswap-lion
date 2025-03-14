import { TokenInterFace, TokenPriceInterFace } from "./TokenTypes";

export type TokenState = {
  activeToken: number;
  token1: TokenInterFace;
  token2: TokenInterFace;
  token1Price: TokenPriceInterFace;
  token2Price: TokenPriceInterFace;
  pinTokens: TokenInterFace[];
  updateItemData: (data: TokenInterFace) => void;
  setTokenPrice: (data: TokenPriceInterFace) => void;
  setActiveToken: (item: number) => void;
  addPinToken: (token: TokenInterFace) => void;
  removePinToken: (token: TokenInterFace) => void;
  swapTokens: () => void;
  selectedChain: "eth" | "bsc";
  clearTokens: () => void;
  setChain: (chain: "eth" | "bsc") => void;
  addTomanPrice: (price: number) => void;
  toman: number;
};
