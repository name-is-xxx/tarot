import { create } from "zustand";

type TCount = {
  count: number;
  addCount: () => void;
  decCount: () => void;
};

const useCountStore = create<TCount>()((set) => ({
  count: 0,
  addCount: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  decCount: () =>
    set((state) => ({
      count: state.count - 1,
    })),
}));

export default useCountStore;
