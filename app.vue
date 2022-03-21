<script setup>
import { useCounterStore } from '~/stores/counter';

const counter = useCounterStore();
// eslint-disable-next-line no-undef
const metaDescription = computed(
  () => `Counter is currently set to ${counter.value}`
);
</script>

<template>
  <Html>
    <Head>
      <Title>Nuxt 3 x Docker template</Title>
      <Meta name="description" :content="metaDescription"></Meta>
    </Head>
  </Html>
  <h1>Nuxt 3 x Docker template</h1>
  <SimpleCounter />
</template>
