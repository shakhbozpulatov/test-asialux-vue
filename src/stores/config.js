import { defineStore } from "pinia";

export function useConfigStore() {
  return defineStore("config", {
    state: () => ({
      isOpenSidebar: true,
    }),
    actions: {},
  })();
}
