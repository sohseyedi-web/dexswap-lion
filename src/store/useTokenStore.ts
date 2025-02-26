import { TokenInterFace, TokenState } from "@/types";
import { create } from "zustand";

export const useTokenStore = create<TokenState>((set) => ({
  activeToken: 1,
  token1: {} as TokenInterFace,
  token2: {} as TokenInterFace,
  pinTokens: [],

  updateItemData: (data) =>
    set((state) => {
      if (state.activeToken === 1) {
        return { token1: data };
      } else {
        return { token2: data };
      }
    }),

  setActiveToken: (item) => set({ activeToken: item }),

  addPinToken: (token) =>
    set((state) => ({
      pinTokens: [...state.pinTokens, token],
    })),

  removePinToken: (token) =>
    set((state) => ({
      pinTokens: state.pinTokens.filter((t) => t !== token),
    })),
}));
