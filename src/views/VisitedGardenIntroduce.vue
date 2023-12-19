<template>
  <TitlebarLayout
    backgroundColor="#ED955F"
    title="园所介绍"
  >
    <div class="container">
      <h2 class="block__title">园所简介</h2>

      <span
        v-for="section in paragraph"
        :key="section"
        class="block__content"
      >
        {{ section }}
      </span>

      <div class="button-container">
        <!-- TODO 路由跳转相应页面 -->
        <AppButton>预约参观</AppButton>
        <AppButton>了解更多</AppButton>
      </div>
    </div>
  </TitlebarLayout>
</template>

<script setup lang="ts">
// TODO 通过 API 请求获取
const paragraph = [
  '欢迎来到我们温馨、充满活力的幼儿园！这里，每一个孩子都是我们珍贵的宝贝，每一片绿叶和花朵都承载着我们对教育的热爱和执着。',
  '我们的幼儿园坐落在一片宁静而美丽的环境中，犹如童话中的梦幻王国。色彩缤纷的墙绘、各式各样的玩具、以及宽敞明亮的教室，都为孩子们营造了一个充满乐趣和探索的空间。在这里，孩子们可以尽情挥洒他们的创意和想象，与小伙伴们一起快乐成长。',
  '我们拥有一支富有爱心和专业素养的教师团队，他们深知每一个孩子都是独一无二的个体，因此，我们始终坚持个性化教育，关注每一个孩子的成长和进步。通过丰富多彩的课程和活动，我们努力激发孩子们的潜能，培养他们的独立性和创造力。',
  '我们相信，在这个充满爱和关怀的大家庭中，每一个孩子都能感受到温暖和尊重，都能在这里找到属于自己的小小天地。我们期待着与您携手，共同见证孩子们在这里快乐成长、展翅翱翔的美好时光。',
]
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0;
  min-height: calc(100vh - 196px);
  padding-bottom: 24px;
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
}

.button-container * {
  width: 100%;
}
</style>
