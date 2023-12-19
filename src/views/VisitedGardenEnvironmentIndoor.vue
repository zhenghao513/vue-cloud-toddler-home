<template>
  <TitlebarLayout
    backgroundColor="#ED955F"
    title="室内环境"
  >
    <div class="container">
      <h2 class="block__title">教育环境</h2>
      <van-empty />

      <h2 class="block__title">保育环境</h2>
      <van-empty />

      <div class="button-container">
        <!-- TODO 路由跳转相应页面 -->
        <AppButton>预约参观</AppButton>
        <AppButton>了解更多</AppButton>
      </div>
    </div>
  </TitlebarLayout>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0;
  min-height: calc(100vh - 196px);
  padding-bottom: 24px;
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
