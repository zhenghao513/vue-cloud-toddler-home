<template>
  <VanNoticeBar
    :left-icon="props.leftIcon"
    :text="props.text"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  leftIcon?: string
  text: string
}>()
</script>

<style scoped></style>
