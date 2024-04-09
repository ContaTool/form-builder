import { create } from 'zustand';

export const useStore = create((set) => ({
  // Real world - at, least on try
  form: [],
  setForm: (newForm) => set({ form: newForm }),
}));
