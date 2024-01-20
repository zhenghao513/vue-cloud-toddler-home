<template>
  <VanNavBar
    v-show="visible"
    :title="$route.meta.title"
    :left-arrow="showLeftArrow"
    fixed
    safe-area-inset-top
    :z-index="Number.MAX_SAFE_INTEGER"
    @click-left="onClickLeft"
  />
</template>

<script setup lang="ts">
const onClickLeft = () => history.back()

const route = useRoute()
const showLeftArrow = computed(() => {
  // 防止刷新时左侧箭头闪烁
  if (route.name) {
    return !['Home', 'User'].includes(route.name as string)
  }
  return false
})

const visible = computed(() => {
  if (route.name) {
    return !['Login'].includes(route.name as string)
  }

  return false
})
</script>

<style scoped></style>
