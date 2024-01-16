<template>
  <TitlebarLayout
    backgroundColor="#46B1E3"
    title="联系我们"
  >
    <div class="container">
      <h2 class="block__title">办学宗旨和办学理念</h2>
      <span class="block__content">
        我们的幼儿园以孩子为中心，致力于提供一个充满乐趣、安全、温馨的学习环境，让孩子们在这里快乐成长，发展潜力，培养良好的学习习惯和社交技能。我们注重培养孩子们的创造力、想象力和批判性思维，通过丰富多彩的活动和课程，激发他们的学习兴趣和好奇心。我们寓教于乐，让孩子们在轻松愉快的氛围中学习知识，提高技能。我们注重培养孩子们的全面发展，包括身体、智力、情感和社会技能等方面。我们与家长密切合作，共同为孩子的成长和发展努力。
      </span>
      <h2 class="block__title">学校荣誉</h2>
      <VanEmpty />

      <h2 class="block__title">教学优势</h2>
      <div class="feature-wrapper">
        <div class="circle-shape">爱心</div>
        <div class="circle-shape">耐心</div>
        <div class="circle-shape">责任心</div>
      </div>

      <VanCellGroup inset>
        <VanCell
          v-for="item in data?.contactInformation"
          :key="item.title"
          :title="item.title"
          :value="item.value"
        />
      </VanCellGroup>
    </div>
  </TitlebarLayout>
</template>

<script setup lang="ts">
import { useFetch } from '@/composables/useFetch'

interface ContactItem {
  title: string
  value: string
}
interface ContactInformation {
  contactInformation: ContactItem[]
}
const { data } = useFetch<ContactInformation>(
  'https://mock.presstime.cn/mock/657d66b7b9a378051c093a41/user-contact',
)
</script>

<style scoped>
.page-layout :deep(.slot-container) {
  margin-top: 0;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0;
  min-height: calc(
    100vh - var(--van-nav-bar-height) - 150px -
      var(--default-padding-bottom-fixed)
  );
}

.container * + * {
  margin-top: 0;
}

.feature-wrapper {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.circle-shape {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #fff;
  height: 100px;
  width: 100px;
  border-radius: 50%;
}

.circle-shape:nth-child(1) {
  background-color: #bbb2c8;
}

.circle-shape:nth-child(2) {
  background-color: #b6c5d1;
}

.circle-shape:nth-child(3) {
  background-color: #a6c2be;
}

.van-cell-group {
  margin-top: 1em;
}
</style>
