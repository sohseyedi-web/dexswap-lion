import { TokenInterFace, TokenState } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";

export const useTokenStore = create<TokenState>((set) => ({
  activeToken: 1,
  token1: {} as TokenInterFace,
  token2: {} as TokenInterFace,
  pinTokens: [],

  updateItemData: (data) =>
    set((state) => {
      if (state.activeToken === 1) {
        if (data._id !== state.token2._id) {
          return { token1: data };
        } else {
          toast.error("امکان انتخاب دو ارز مشابه وجود ندارد");
          return state;
        }
      } else {
        if (data._id !== state.token1._id) {
          return { token2: data };
        } else {
          toast.error("امکان انتخاب دو ارز مشابه وجود ندارد");
          return state;
        }
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
  swapTokens: () =>
    set((state) => {
      if (state.token1 && state.token2) {
        return {
          token1: state.token2,
          token2: state.token1,
        };
      } else {
        console.log(
          "Each of token1 and token2 should have values before swapping."
        );
        return state;
      }
    }),
}));
