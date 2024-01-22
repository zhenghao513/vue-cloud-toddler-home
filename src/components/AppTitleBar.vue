<template>
  <div
    :style="{ backgroundColor: props.backgroundColor }"
    class="title-bar"
  >
    {{ props.title }}
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title?: string
  backgroundColor?: string
}>()
</script>

<style scoped>
.title-bar {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
</style>
