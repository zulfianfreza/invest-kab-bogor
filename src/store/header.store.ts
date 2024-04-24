import { create } from 'zustand';

interface HeaderStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  toggle: () => void;
}

const useHeaderStore = create<HeaderStore>((set, get) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
  toggle: () => set({ isOpen: !get().isOpen }),
}));

export default useHeaderStore;
