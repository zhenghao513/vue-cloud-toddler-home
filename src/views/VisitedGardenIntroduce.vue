<template>
  <TitleBarLayout
    backgroundColor="#ED955F"
    title="园所介绍"
  >
    <h2 class="block__title">园所简介</h2>

    <span
      v-for="section in data?.paragraphs"
      :key="section"
      class="block__content"
    >
      {{ section }}
    </span>

    <div class="button-group__bottom">
      <NavigationButtonBlock @click="$router.push({ name: 'VisitedGardenAppointment' })">
        预约参观
      </NavigationButtonBlock>
      <NavigationButtonBlock @click="$router.push({ name: 'Contact' })">
        了解更多
      </NavigationButtonBlock>
    </div>
  </TitleBarLayout>
</template>

<script setup lang="ts">
import { useFetch } from '@/composables/useFetch'

interface GardenIntroduce {
  paragraphs: string[]
}
const { data } = useFetch<GardenIntroduce>(
  'https://mock.presstime.cn/mock/657d66b7b9a378051c093a41/home-introduce',
)
</script>

<style scoped>
span:nth-child(2) {
  margin-top: 0;
}

span {
  margin-top: 1em;
}

.button-group__bottom {
  margin-top: var(--elements-margin-horizontal-l);
  display: flex;
  justify-content: space-between;
}

.button-group__bottom :nth-child(2) {
  margin-top: 0;
  margin-left: var(--elements-margin-vertical-m);
}

.button-group__bottom * {
  width: 100%;
}
</style>
