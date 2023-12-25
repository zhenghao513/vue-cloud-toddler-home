<template>
  <TitlebarLayout
    backgroundColor="#ED955F"
    title="园所介绍"
  >
    <div class="container">
      <h2 class="block__title">园所简介</h2>

      <span
        v-for="section in data?.paragraphs"
        :key="section"
        class="block__content"
      >
        {{ section }}
      </span>

      <div class="button-container">
        <AppButton @click="$router.push({ name: 'VisitedGardenAppointment' })">
          预约参观
        </AppButton>
        <AppButton @click="$router.push({ name: 'Contact' })">
          了解更多
        </AppButton>
      </div>
    </div>
  </TitlebarLayout>
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
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0;
  min-height: calc(100vh - 196px - var(--default-padding-bottom-fixed));
}

span:nth-child(2) {
  margin-top: 0;
}

span {
  margin-top: 1em;
}

.button-container {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
}

.button-container :nth-child(2) {
  margin-top: 0;
  margin-left: var(--elements-margin-vertical-m);
}

.button-container * {
  width: 100%;
}
</style>
