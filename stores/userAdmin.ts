import { defineStore } from "pinia";

export const useUserAdminStore = defineStore("userAdmin", {
  state: () => ({
    name: "",
    loggedIn: false,
  }),
  getters: {
    upperName: (state) => state.name.toUpperCase(),
    isAuthenticated: (state) => state.loggedIn && !!state.name,
  },
  actions: {
    login(name: string) {
      this.name = name;
      this.loggedIn = true;
    },
    logout() {
      this.name = "";
      this.loggedIn = false;
    },
  },
});
