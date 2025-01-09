<script setup lang="ts">
import TodoForm from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'
</script>
<template>
  <div class="todo">
    Todo view

    <TodoForm />
    <TodoList />
  </div>
</template>
<style scoped>
@media (min-width: 1024px) {
  .todo {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
