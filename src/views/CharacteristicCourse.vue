<template>
  <TitlebarLayout
    title="特色课程"
    background-color="#F7CE00"
  >
    <VanCard
      v-for="course in data?.courses"
      :key="course.id"
      :num="course.duration"
      :price="formatPrice(course.price)"
      :desc="course.description"
      :title="course.name"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
    />
  </TitlebarLayout>
</template>

<script setup lang="ts">
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
</script>

<style scoped></style>
