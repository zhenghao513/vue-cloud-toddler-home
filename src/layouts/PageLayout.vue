<template>
  <div class="page-layout">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.page-layout {
  padding-top: 46px;
  padding-bottom: 50px;
  margin-top: 0;
  min-height: 100vh;
}
</style>
