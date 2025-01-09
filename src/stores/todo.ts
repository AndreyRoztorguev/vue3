import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Todo {
  id: string
  title: string
  body: string
  completed: boolean
}

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])
  // const doubleCount = computed(() => count.value * 2)
  function addTodo(todo: Todo) {
    todos.value.push(todo)
  }
  function removeTodo(id: Todo['id']) {
    todos.value = todos.value.filter((t) => t.id !== id)
  }
  function completeTodo(id: Todo['id']) {
    const todo = todos.value.find(({ id: todoId }) => todoId === id)
    if (!todo) return
    todo.completed = !todo.completed
  }

  return { todos, addTodo, removeTodo, completeTodo }
})
