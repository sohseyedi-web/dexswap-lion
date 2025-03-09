import { create } from "zustand";

type TableState = {
  search: string;
  active: boolean;
  page: number;
  hasMore: boolean;
  setActive: (active: boolean) => void;
  setSearch: (search: string) => void;
  setPage: (page: number) => void;
  setHasMore: (hasMore: boolean) => void;
};

export const useTableStore = create<TableState>((set) => ({
  search: "",
  active: false,
  page: 1,
  hasMore: true,
  setActive: (active) => set({ active }),
  setSearch: (search) => set({ search }),
  setPage: (page) => set({ page }),
  setHasMore: (hasMore) => set({ hasMore }),
}));
