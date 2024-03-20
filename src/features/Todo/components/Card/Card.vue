<template>
  <div :class="[styles.card, isDone && 'done']">
    <span>{{ title }}</span>
    <span v-if="isDone">OK</span>
  </div>
</template>

<script lang="ts" setup>
import styles from './Card.module.scss';

withDefaults(defineProps<{
  title: string,
  isDone: boolean,
}>(), {
  isDone: false,
});
</script>