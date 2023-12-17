<template>
  <PageLayout>
    <AppNoticebar
      left-icon="volume-o"
      :text="data.message ?? error"
    />
    <AppSearch />
  </PageLayout>
</template>

<script setup lang="ts">
import { useFetch } from '@/composables/useFetch'

interface WelcomeMessage {
  message: string
}
const { data, error } = useFetch<WelcomeMessage>(
  'https://mock.presstime.cn/mock/657d66b7b9a378051c093a41/home-notice',
)
</script>

<style scoped></style>
