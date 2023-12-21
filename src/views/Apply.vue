<template>
  <TitlebarLayout
    backgroundColor="#E87361"
    title="报名申请"
  >
    <AppButton
      backgroundColor="#E87361"
      @click="$router.push({ name: 'ApplyBegin' })"
    >
      新幼儿报名
    </AppButton>
    <AppButton
      backgroundColor="#E87361"
      @click="$router.push({ name: 'ApplyOrigin' })"
    >
      原幼儿报名
    </AppButton>
    <AppButton backgroundColor="#E87361">线上缴费</AppButton>
  </TitlebarLayout>
</template>

<script setup lang="ts"></script>

<style scoped></style>
