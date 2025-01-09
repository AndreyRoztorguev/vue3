<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
defineProps<{ title: string; count: number }>()
const store = useCounterStore()
</script>
<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <p>Count: {{ store.count }}</p>
    <v-btn color="primary" @click="store.increment">+</v-btn>
    <v-btn color="primary" @click="store.decrement">-</v-btn>
    <v-btn color="primary" @click="store.reset">reset</v-btn>
  </div>
</template>
<style scoped>
.container {
  border: 1px solid green;
}
</style>
