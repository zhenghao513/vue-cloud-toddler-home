<template>
  <TitleBarLayout
    backgroundColor="#92C48D"
    title="成长评估"
  >
    <h2 class="block__title"></h2>

    <div class="button-group__bottom">
      <NavigationButtonBlock>报告示例</NavigationButtonBlock>
      <NavigationButtonBlock>订阅报告</NavigationButtonBlock>
    </div>
  </TitleBarLayout>
</template>

<script setup lang="ts"></script>

<style scoped>
.button-group__bottom {
  display: flex;
  justify-content: space-between;
  margin-top: var(--elements-margin-horizontal-l);
}

.button-group__bottom :nth-child(2) {
  margin-top: 0;
  margin-left: var(--elements-margin-vertical-m);
}

.button-group__bottom * {
  width: 100%;
}
</style>
