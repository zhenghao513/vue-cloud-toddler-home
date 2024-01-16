<template>
  <TheNavbar />
  <VanBackTop bottom="20vh" />
  <RouterView v-slot="{ Component }">
    <Transition
      name="van-fade"
      mode="out-in"
    >
      <component :is="Component" />
    </Transition>
  </RouterView>
  <TheTabbar />
</template>

<script setup lang="ts"></script>

<style scoped></style>
