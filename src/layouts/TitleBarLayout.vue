<template>
  <PageLayout>
    <AppTitleBar v-bind="$attrs" />
    <div class="slot-container">
      <slot></slot>
    </div>
  </PageLayout>
</template>

<script setup lang="ts"></script>

<style scoped>
.slot-container {
  padding-left: var(--default-padding-start);
  padding-right: var(--default-padding-end);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0;
  min-height: calc(
    100vh - var(--van-nav-bar-height) - 150px -
      var(--default-padding-bottom-fixed)
  );
}
</style>
