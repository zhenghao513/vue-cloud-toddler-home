<template>
  <TitlebarLayout
    backgroundColor="#E87361"
    title="报名申请"
  >
    <div style="margin-top: 1.5em">
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
    </div>
  </TitlebarLayout>
</template>

<script setup lang="ts"></script>

<style scoped></style>
