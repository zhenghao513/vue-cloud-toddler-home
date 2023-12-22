<template>
  <TitlebarLayout
    backgroundColor="#E87361"
    :title="title"
  >
    <h2 class="block__title">报名流程</h2>

    <h2 class="block__title">资费标准</h2>

    <h2 class="block__title">报名资料</h2>

    <h2 class="block__title">体检流程</h2>

    <h2 class="block__title">幼儿作息时间</h2>

    <AppButton
      backgroundColor="#E87361"
      @click="$router.push({ name: 'ApplySurvey' })"
    >
      问卷调查
    </AppButton>
    <AppButton
      v-if="$route.name === 'ApplyBegin'"
      backgroundColor="#E87361"
      @click="$router.push({ name: 'CharacteristicCourse' })"
    >
      预约体验课
    </AppButton>
    <AppButton
      backgroundColor="#E87361"
      @click="$router.push({ name: 'Assess' })"
    >
      预约评测
    </AppButton>
  </TitlebarLayout>
</template>

<script setup lang="ts">
const route = useRoute()
const title = computed(() => {
  return route.name === 'ApplyBegin' ? '新幼儿报名' : '原幼儿报名'
})
</script>

<style scoped></style>
