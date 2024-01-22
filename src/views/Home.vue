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
    text: '报名申请',
    icon: 'icon-a-027_shangwang',
    to: { name: 'Apply' },
  },
  {
    dot: false,
    replace: false,
    text: '成长评估',
    icon: 'icon-a-027_shuju-15',
    to: { name: 'Assess' },
  },
  {
    dot: false,
    replace: false,
    text: '今日菜谱',
    icon: 'icon-a-027_gouwu-04',
    to: { name: 'Recipe' },
  },
  {
    dot: false,
    replace: false,
    text: '精彩瞬间',
    icon: 'icon-a-027_tupian-13',
    to: { name: 'Photo' },
  },
  {
    dot: false,
    replace: false,
    text: '园所参观',
    icon: 'icon-a-027_ditu',
    to: { name: 'Visit' },
  },
  {
    dot: false,
    replace: false,
    text: '特色课程',
    icon: 'icon-a-027_youxi-25',
    to: { name: 'Course' },
  },
  {
    dot: false,
    replace: false,
    text: '建议中心',
    icon: 'icon-a-027_xinfeng',
    to: { name: 'Suggestion' },
  },
  {
    dot: false,
    replace: false,
    text: '每日签到',
    icon: 'icon-a-027_rili',
    to: { name: 'ClockIn' },
  },
]
</script>

<style scoped></style>
