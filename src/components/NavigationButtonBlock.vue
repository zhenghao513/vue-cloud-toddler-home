<template>
  <div
    class="block__button"
    :style="{ backgroundColor: props.backgroundColor }"
    @click="$emit('click')"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  backgroundColor?: string
}>()

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const emits = defineEmits(['click'])
</script>

<style scoped>
.block__button {
  background-color: #d4bfb8;
  border-radius: 14px;
  color: #fff;
  font-size: 16px;
  line-height: 75px;
  text-align: center;
}

.block__button:active {
  color: rgba(255, 255, 255, 0.5);
}
</style>
