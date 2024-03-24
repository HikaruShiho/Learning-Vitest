<template>
  <div :class="styles.title">TODO一覧</div>
  <TodoList :todos="todos" :class="styles.todoList" />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import styles from './Todo.module.scss';
import TodoList from '../../features/Todo/components/TodoList/TodoList.vue';
import { fetchTodos } from '../../features/Todo/api/todo';
import type { Todo } from '../../features/Todo/types/todo';

const todos = ref<Todo[]>([]);

onMounted(async () => {
  todos.value = await fetchTodos();
});
</script>