<template>
  <input
    type="text"
    :name="name"
    :value="modelValue"
    :class="styles.input"
    :placeholder="placeholder"
    :disabled="disabled"
    @input="onInputText"
  />
  <div v-if="showMessage" :class="styles.message">文字が入力されました</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import styles from './Input.module.scss';

withDefaults(defineProps<{
  name: string,
  modelValue: string,
  disabled: boolean,
  placeholder?: string
}>(), {
  disabled: false,
  placeholder: ""
});

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const showMessage = ref(false);

const onInputText = (e: Event) => {
  showMessage.value = !!(e.target as HTMLInputElement).value;
};
</script>