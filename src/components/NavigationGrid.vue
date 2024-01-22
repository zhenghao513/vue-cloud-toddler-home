<template>
  <VanGrid :border="false">
    <VanGridItem
      v-for="item in props.gridList"
      :key="item.text"
      :text="item.text"
      :to="item.to"
    >
      <template #icon>
        <IconSymbol :icon="item.icon" />
      </template>
    </VanGridItem>
  </VanGrid>
</template>

<script setup lang="ts">
import type { GridItemProps } from 'vant'

const props = defineProps<{
  gridList: GridItemProps[]
}>()
</script>

<style scoped></style>
