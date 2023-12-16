<template>
  <van-tabbar v-model="active">
    <van-tabbar-item
      v-for="item in tabbarItems"
      :key="item.name"
      :name="item.name"
      :icon="item.icon"
      :to="item.to"
    >
      {{ item.text }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import type { TabbarItemProps } from 'vant'

const active = ref('home')

interface TabbarItem extends TabbarItemProps {
  text?: string
}
const tabbarItems: TabbarItem[] = [
  {
    dot: false,
    replace: false,
    text: '首页',
    name: 'home',
    icon: 'home-o',
    to: 'home',
  },
  {
    dot: false,
    replace: false,
    text: '我',
    name: 'user',
    icon: 'user-o',
    to: 'user',
  },
]

const route = useRoute()
watchEffect(() => {
  active.value = String(route.name)
})
</script>

<style scoped></style>
