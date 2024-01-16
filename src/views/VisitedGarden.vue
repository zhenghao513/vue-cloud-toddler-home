<template>
  <TitlebarLayout
    title="园所参观"
    backgroundColor="#ED955F"
  >
    <div style="margin-top: 1.5em">
      <AppButton
        backgroundColor="#ED955F"
        @click="$router.push({ name: 'Introduce' })"
      >
        园所介绍
      </AppButton>
      <AppButton
        backgroundColor="#ED955F"
        @click="$router.push({ name: 'EnvironmentIndoor' })"
      >
        室内环境
      </AppButton>
      <AppButton
        backgroundColor="#ED955F"
        @click="$router.push({ name: 'EnvironmentOutdoor' })"
      >
        室外环境
      </AppButton>
    </div>
  </TitlebarLayout>
</template>

<script setup lang="ts"></script>

<style scoped></style>
