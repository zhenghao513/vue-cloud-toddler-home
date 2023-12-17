<template>
  <div
    class="page-layout"
    :class="{ 'page-layout--secondary': isSecondaryPage }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const isSecondaryPage = computed(() => {
  return !['home', 'user'].includes(route.name as string)
})
</script>

<style scoped>
.page-layout {
  padding-top: 46px;
  padding-bottom: 50px;
  margin-top: 0;
  min-height: 100vh;
}

.page-layout--secondary {
  padding-bottom: 0;
}
</style>
