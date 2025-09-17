import { create } from "zustand";

interface AppState {
  device: {
    user: {
      email: string;
      name: string;
      displayId: string;
    } | null;
  } | null;
  setDevice: (
    device: {
      user: { email: string; name: string; displayId: string } | null;
    } | null
  ) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Initial state
  device: null,

  // Actions
  setDevice: (device) => set({ device }),
}));
