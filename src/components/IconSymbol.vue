<template>
  <svg
    class="icon"
    aria-hidden="true"
  >
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup lang="ts">
const props = defineProps<{
  icon?: string
}>()

const iconName = computed(() => {
  return `#${props.icon}`
})
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
