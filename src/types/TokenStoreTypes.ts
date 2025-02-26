import { TokenInterFace } from "./TokenTypes";

export type TokenState = {
  activeToken: number;
  token1: TokenInterFace;
  token2: TokenInterFace;
  pinTokens: TokenInterFace[];
  updateItemData: (data: TokenInterFace) => void;
  setActiveToken: (item: number) => void;
  addPinToken: (token: TokenInterFace) => void;
  removePinToken: (token: TokenInterFace) => void;
};
