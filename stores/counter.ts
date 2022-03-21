import { defineStore } from 'pinia';

type State = {
  value: number;
};

type Getters = {
  isPerfectSquare: () => boolean;
};

type Actions = {
  increment(): void;
  decrement(): void;
};

export const useCounterStore = defineStore<'counter', State, Getters, Actions>(
  'counter',
  {
    state() {
      return {
        value: 0
      };
    },
    getters: {
      isPerfectSquare() {
        return Math.sqrt(this.value) % 1 === 0;
      }
    },
    actions: {
      increment() {
        this.value++;
      },
      decrement() {
        this.value--;
      }
    },
    persist: true
  }
);
