<template>
  <TitleBarLayout
    backgroundColor="#ED955F"
    title="室外环境"
  >
    <h2 class="block__title">整体概览</h2>
    <van-empty />

    <h2 class="block__title">大型玩具</h2>
    <van-empty />

    <div class="button-group__bottom">
      <NavigationButtonBlock
        @click="$router.push({ name: 'VisitAppointment' })"
      >
        预约参观
      </NavigationButtonBlock>
      <NavigationButtonBlock @click="$router.push({ name: 'Contact' })">
        了解更多
      </NavigationButtonBlock>
    </div>
  </TitleBarLayout>
</template>

<script setup lang="ts"></script>

<style scoped>
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
