<template>
  <AppNavbar />
  <VanBackTop bottom="20vh" />
  <RouterView v-slot="{ Component }">
    <Transition name="van-fade">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <AppTabbar />
</template>

<script setup lang="ts"></script>

<style scoped></style>
