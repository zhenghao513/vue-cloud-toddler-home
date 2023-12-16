<template>
  <VanNavBar
    :title="$route.meta.title"
    :left-arrow="showLeftArrow"
    fixed
    safe-area-inset-top
    @click-left="onClickLeft"
  />
</template>

<script setup lang="ts">
const onClickLeft = () => history.back()

const route = useRoute()
const showLeftArrow = computed(() => {
  // 防止刷新时左侧箭头闪烁
  if (route.name) {
    return !['home', 'user'].includes(String(route.name))
  }
  return false
})
</script>

<style scoped></style>
