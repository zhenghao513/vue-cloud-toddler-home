<template>
  <transition name="van-slide-up">
    <van-tabbar
      v-show="visible"
      v-model="active"
      route
    >
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
  </transition>
</template>

<script setup lang="ts">
import type { TabbarItemProps } from 'vant'

const active = ref('Home')

interface TabbarItem extends TabbarItemProps {
  text?: string
}
const tabbarItems: TabbarItem[] = [
  {
    dot: false,
    replace: false,
    text: '首页',
    name: 'Home',
    icon: 'home-o',
    to: { name: 'Home' },
  },
  {
    dot: false,
    replace: false,
    text: '我',
    name: 'User',
    icon: 'user-o',
    to: { name: 'User' },
  },
]

const route = useRoute()
watchEffect(() => {
  active.value = route.name as string
})

const visible = computed(() => {
  return ['Home', 'User'].includes(route.name as string)
})
</script>

<style scoped></style>
