import { create } from "zustand";

type TableState = {
  search: string;
  active: boolean;
  setActive: (active: boolean) => void;
  setSearch: (search: string) => void;
};

export const useTableStore = create<TableState>((set) => ({
  search: "",
  active: false,
  setActive: (active) => set({ active }),
  setSearch: (search) => set({ search }),
}));
