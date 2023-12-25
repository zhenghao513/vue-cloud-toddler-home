<template>
  <TitlebarLayout
    backgroundColor="#ED955F"
    title="室外环境"
  >
    <div class="container">
      <h2 class="block__title">整体概览</h2>
      <van-empty />

      <h2 class="block__title">大型玩具</h2>
      <van-empty />

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

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0;
  min-height: calc(100vh - 196px - var(--default-padding-bottom-fixed));
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
