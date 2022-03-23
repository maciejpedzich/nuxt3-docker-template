<script setup>
import { useCounterStore } from '~/stores/counter';

const counter = useCounterStore();
</script>

<template>
  <div id="counter-container">
    <p id="value">
      Counter is currently set to {{ counter.value }}
      <strong id="perfect-square" v-if="counter.isPerfectSquare">
        <em>🎉 IT'S A PERFECT SQUARE 🎉</em>
      </strong>
    </p>
    <div id="actions">
      <button @click="counter.increment">Increment</button>
      <button @click="counter.decrement">Decrement</button>
    </div>
  </div>
</template>

<style scoped>
#counter-container {
  line-height: 1.5rem;
  text-align: center;
}

#value {
  font-weight: bold;
}

#actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
}
</style>
