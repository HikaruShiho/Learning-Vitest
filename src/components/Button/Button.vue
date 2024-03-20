<template>
  <button
    type="button"
    :disabled="disabled"
    :class="[styles.button, btnType]"
    @click="emit('click', 'actionsに表示')"
  >
    {{ label }}
  </button>
</template>

<script lang="ts" setup>
import styles from './Button.module.scss';

withDefaults(defineProps<{
  label: string,
  disabled: boolean,
  btnType?: "primary" | "danger"
}>(), {
  disabled: false,
  btnType: "primary"
});

const emit = defineEmits<{
  (e: 'click', id: string): void;
}>();
</script>