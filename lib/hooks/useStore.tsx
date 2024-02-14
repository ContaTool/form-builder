import { create } from 'zustand';

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),

  // Real world - at, least on try
  form: [],
  setForm: (newForm) => set({ form: newForm }),
}));
