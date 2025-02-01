import { create } from "zustand";

interface AuthStore {
  isUserLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  isUserLoggedIn: !!localStorage.getItem("LoginToken"),
  login: (token: string) => {
    set({ isUserLoggedIn: true });
    localStorage.setItem("LoginToken", token);
  },
  logout: () => {
    set({ isUserLoggedIn: false });
    localStorage.removeItem("LoginToken");
  },
}));
