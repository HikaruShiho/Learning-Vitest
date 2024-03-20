<template>
  <div :class="styles.title">TODO一覧</div>
  <div :class="styles.todoList" v-if="todos.length">
    <Card
      v-for="todo in todos"
      :key="todo.id"
      :title="todo.title"
      :isDone="todo.isDone"
    />
  </div>
  <div v-else :class="styles.empty">TODOはありません</div>
</template>

<script lang="ts" setup>
import Card from '../Card/Card.vue';
import styles from './TodoList.module.scss';
import type { Todo } from '../../types/todo';

withDefaults(defineProps<{
  todos: Todo[],
}>(), {});
</script>