<template>
  <PageLayout>
    <AppNoticebar
      left-icon="volume-o"
      :text="data.message ?? error"
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
const { data, error } = useFetch<WelcomeMessage>(
  'https://mock.presstime.cn/mock/657d66b7b9a378051c093a41/home-notice',
)

const gridItems: GridItemProps[] = [
  {
    dot: false,
    replace: false,
    text: '报名申请',
    icon: 'icon-a-027_ditu',
  },
  {
    dot: false,
    replace: false,
    text: '成长评估',
    icon: 'icon-a-027_ditu',
  },
  {
    dot: false,
    replace: false,
    text: '今日菜谱',
    icon: 'icon-a-027_ditu',
  },
  {
    dot: false,
    replace: false,
    text: '精彩瞬间',
    icon: 'icon-a-027_ditu',
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
    icon: 'icon-a-027_ditu',
  },
  {
    dot: false,
    replace: false,
    text: '建议中心',
    icon: 'icon-a-027_ditu',
  },
  {
    dot: false,
    replace: false,
    text: '每日签到',
    icon: 'icon-a-027_ditu',
  },
]
</script>

<style scoped></style>
