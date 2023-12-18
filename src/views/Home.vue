<template>
  <PageLayout>
    <AppNoticebar
      left-icon="volume-o"
      :text="data?.message"
    />
    <AppSearch />
    <AppGrid :grid-list="gridItems" />
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
  },
  {
    dot: false,
    replace: false,
    text: '成长评估',
    icon: 'icon-a-027_shuju-15',
  },
  {
    dot: false,
    replace: false,
    text: '今日菜谱',
    icon: 'icon-a-027_gouwu-04',
  },
  {
    dot: false,
    replace: false,
    text: '精彩瞬间',
    icon: 'icon-a-027_tupian-13',
  },
  {
    dot: false,
    replace: false,
    text: '园所参观',
    icon: 'icon-a-027_ditu',
  },
  {
    dot: false,
    replace: false,
    text: '特色课程',
    icon: 'icon-a-027_youxi-25',
    to: { name: 'CharacteristicCourse' },
  },
  {
    dot: false,
    replace: false,
    text: '建议中心',
    icon: 'icon-a-027_xinfeng',
    to: { name: 'SuggestionCenter' },
  },
  {
    dot: false,
    replace: false,
    text: '每日签到',
    icon: 'icon-a-027_rili',
    to: { name: 'DailySignIn' },
  },
]
</script>

<style scoped></style>
