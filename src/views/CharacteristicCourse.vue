<template>
  <TitlebarLayout
    title="特色课程"
    background-color="#F7CE00"
  >
    <Grid
      :length="length"
      :pageSize="10"
      :pageProvider="pageProvider"
      class="grid"
    >
      <template #probe>
        <div class="item">Probe</div>
      </template>

      <template #placeholder="{ index, style }">
        <div
          class="item"
          :style="style"
        >
          Placeholder {{ index }}
        </div>
      </template>

      <template #default="{ item, style }">
        <div
          class="item"
          :style="style"
        >
          <VanCard
            :num="item.duration"
            :price="formatPrice(item.price)"
            :desc="item.description"
            :title="item.name"
            thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
          />
        </div>
      </template>
    </Grid>
  </TitlebarLayout>
</template>

<script setup lang="ts">
import Grid from 'vue-virtual-scroll-grid'
import { useFetch } from '@/composables/useFetch'

interface Course {
  id: number
  name: string
  description: string
  instructor: string
  duration: string
  price: string
}

interface Courses {
  courses: Course[]
}

const { data } = useFetch<Courses>(
  'https://mock.presstime.cn/mock/657d66b7b9a378051c093a41/home-characteristic-course',
)

const formatPrice = (price: string) => {
  return price.slice(0, -1)
}

const length = computed(() => {
  return data.value?.courses.length ?? 0
})

const pageProvider = (): Promise<unknown[]> =>
  new Promise((resolve) => resolve(data.value?.courses ?? []))
</script>

<style scoped>
.grid {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(1, 1fr);
}

.item {
  margin-top: 0;
}
</style>
