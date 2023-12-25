<template>
  <TitlebarLayout
    backgroundColor="#92C48D"
    title="成长评估"
  >
    <div class="container">
      <h2 class="block__title"></h2>

      <div class="button-group__bottom">
        <AppButton>报告示例</AppButton>
        <AppButton>订阅报告</AppButton>
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

.button-group__bottom {
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
