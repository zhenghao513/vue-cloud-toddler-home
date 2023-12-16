<template>
  <VanSearch
    v-model="value"
    placeholder="请输入搜索关键词"
  />
</template>

<script setup lang="ts">
const value = ref('')
</script>

<style scoped></style>
