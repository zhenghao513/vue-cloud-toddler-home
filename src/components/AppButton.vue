<template>
  <div
    class="block"
    :style="{ backgroundColor: props.backgroundColor }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  backgroundColor?: string
}>()
</script>

<style scoped>
.block {
  background-color: #d4bfb8;
  border-radius: 14px;
  color: #fff;
  font-size: 16px;
  line-height: 75px;
  margin-left: 24px;
  margin-right: 24px;
  text-align: center;
}

.block:active {
  color: rgba(255, 255, 255, 0.5);
}
</style>
