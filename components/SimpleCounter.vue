<script setup>
import { useCounterStore } from '~/stores/counter';

const counter = useCounterStore();
</script>

<template>
  <div id="counter-container">
    <p id="value">
      Counter's value: {{ counter.value }}
      <strong id="perfect-square" v-if="counter.isPerfectSquare">
        🎉 IT'S A PERFECT SQUARE 🎉
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
  text-align: center;
}

#value {
  font-weight: bold;
}

#actions {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
}
</style>
