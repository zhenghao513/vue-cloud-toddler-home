<template>
  <div
    class="page-layout"
    :class="{ 'page-layout-returnable': isReturnable }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()

const isReturnable = computed(() => {
  return !['Home', 'User'].includes(route.name as string)
})
</script>

<style scoped>
.page-layout {
  padding-top: var(--van-nav-bar-height);
  padding-bottom: calc(
    var(--van-tabbar-height) + var(--default-padding-bottom-fixed)
  );
  margin-top: 0;
  min-height: 100vh;
}

.page-layout-returnable {
  padding-bottom: var(--default-padding-bottom-fixed);
}
</style>
