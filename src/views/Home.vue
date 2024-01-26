<template>
  <PageLayout>
    <AppNoticeBar
      left-icon="volume-o"
      :text="data?.message"
    />
    <AppSearch />
    <NavigationGrid :grid-list="gridItems" />
  </PageLayout>
</template>

<script setup lang="ts">
import { useFetch } from '@/composables/useFetch'
import { GridItemProps } from 'vant'

interface WelcomeMessage {
  message: string
}
const { data } = useFetch<WelcomeMessage>(
  'https://mock.presstime.cn/mock/657d66b7b9a378051c093a41/home-notice',
)

const gridItems: GridItemProps[] = [
  {
    dot: false,
    replace: false,
    text: 'home.apply',
    icon: 'icon-a-027_shangwang',
    to: { name: 'Apply' },
  },
  {
    dot: false,
    replace: false,
    text: 'home.assess',
    icon: 'icon-a-027_shuju-15',
    to: { name: 'Assess' },
  },
  {
    dot: false,
    replace: false,
    text: 'home.recipe',
    icon: 'icon-a-027_gouwu-04',
    to: { name: 'Recipe' },
  },
  {
    dot: false,
    replace: false,
    text: 'home.photo',
    icon: 'icon-a-027_tupian-13',
    to: { name: 'Photo' },
  },
  {
    dot: false,
    replace: false,
    text: 'home.visit',
    icon: 'icon-a-027_ditu',
    to: { name: 'Visit' },
  },
  {
    dot: false,
    replace: false,
    text: 'home.course',
    icon: 'icon-a-027_youxi-25',
    to: { name: 'Course' },
  },
  {
    dot: false,
    replace: false,
    text: 'home.suggestion',
    icon: 'icon-a-027_xinfeng',
    to: { name: 'Suggestion' },
  },
  {
    dot: false,
    replace: false,
    text: 'home.clockIn',
    icon: 'icon-a-027_rili',
    to: { name: 'ClockIn' },
  },
]
</script>

<style scoped></style>
