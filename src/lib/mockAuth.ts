import { create } from "zustand";

interface AuthStore {
  isUserLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}
const isUserLoggedIn = false;
export const useAuthStore = create<AuthStore>((set) => ({
  isUserLoggedIn: false,
  login: () => {
    set({ isUserLoggedIn: true });
    console.log("login auth", isUserLoggedIn);
  },
  logout: () => {
    set({ isUserLoggedIn: false });
    console.log("log out auth", isUserLoggedIn);
  },
}));
