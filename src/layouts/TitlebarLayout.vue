<template>
  <PageLayout>
    <AppTitlebar v-bind="$attrs" />
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
}
</style>
