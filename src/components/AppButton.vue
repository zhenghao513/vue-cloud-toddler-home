<template>
  <div
    class="block"
    :style="{ backgroundColor: props.backgroundColor }"
    @click="$emit('click')"
  >
    <slot />
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
.block {
  background-color: #d4bfb8;
  border-radius: 14px;
  color: #fff;
  font-size: 16px;
  line-height: 75px;
  margin-left: var(--default-padding-start);
  margin-right: var(--default-padding-end);
  text-align: center;
}

.block:active {
  color: rgba(255, 255, 255, 0.5);
}
</style>
