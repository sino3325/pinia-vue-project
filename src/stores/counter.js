import { defineStore } from "pinia";

export const usePersistentCounterStore = defineStore('counter', {
  state: () => ({
    firstCount: 0,
    secondCount: 0
  }),
  getters: {

  },
  actions: {
    addFirstCount(number) {
      this.firstCount += number;
    },
    addSecondCount(number) {
      this.secondCount += number;
    },
  },
  persist: true
});