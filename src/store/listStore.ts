import { create } from "zustand";

type TCount = {
  list: API.list[];
  addItem: (item: API.list) => void;
  delItem: (id: number) => void;
  updateItem: (id: number) => void;
};

const useListStore = create<TCount>()((set) => ({
  list: [],
  addItem: (item) =>
    set((state) => ({
      list: [...state.list, item],
    })),
  delItem: (id) =>
    set((state) => ({
      list: state.list.filter((item) => item.id !== id),
    })),
  updateItem: (id) =>
    set((state) => ({
      list: state.list.map((item) =>
        item.id === id ? { ...item, isFinish: !item.isFinish } : item
      ),
    })),
}));

export default useListStore;
