import { create } from "zustand";
const useCountStore = create((set) => ({
  count: 1,
  inc: () =>
    set((state) => ({
      count: state.count + 1,
    })),
  desc: () =>
    set((state) => ({
      count: state.count > 1 ? state.count - 1 : 1,
    })),
}));

export default useCountStore;
