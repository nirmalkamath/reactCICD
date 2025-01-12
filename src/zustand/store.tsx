import { create } from 'zustand';

interface BearState {
  bears: number;
  increaseBears: (by: number) => void;
  decreaseBears: (by: number) => void;
}

const useBearStore = create<BearState>((set) => ({
  bears: 0,
  increaseBears: (by) => set((state) => ({ bears: state.bears + by })),
  decreaseBears: (by) => set((state) => ({ bears: state.bears - by })),
}));

export default useBearStore;
