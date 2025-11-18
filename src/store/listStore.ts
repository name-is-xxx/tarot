import { addNote, getNoteList } from "@/api/notes";
import { create } from "zustand";

type TCount = {
  list: API.list[];
  fetchList: () => void;
  addItem: (item: Pick<API.list, "title" | "content">) => void;
  delItem: (id: number) => void;
  // updateItem: (id: number) => void;
};

const useListStore = create<TCount>()((set) => ({
  list: [],

  fetchList: async () => {
    try {
      const res = await getNoteList();
      console.log(res);
      set({ list: res.data }); //类型定义
    } catch (error) {}
  },

  addItem: async (item) => {
    // set((state) => ({
    //   list: [...state.list, item],
    // }));
    try {
      const res = await addNote(item);
      console.log(res);
      set((state) => ({
        list: [...state.list, res.data],
      }));
    } catch (error) {}
  },
  delItem: (id) =>
    set((state) => ({
      list: state.list.filter((item) => item.id !== id),
    })),
  // updateItem: (id) =>
  //   set((state) => ({
  //     list: state.list.map((item) =>
  //       item.id === id ? { ...item, isFinish: !item.isFinish } : item
  //     ),
  //   })),
}));

export default useListStore;
