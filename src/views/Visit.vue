<template>
  <TitleBarLayout
    title="园所参观"
    backgroundColor="#ED955F"
  >
    <div style="margin-top: 1.5em">
      <NavigationButtonBlock
        backgroundColor="#ED955F"
        @click="$router.push({ name: 'VisitIntroduce' })"
      >
        园所介绍
      </NavigationButtonBlock>
      <NavigationButtonBlock
        backgroundColor="#ED955F"
        @click="$router.push({ name: 'VisitIndoor' })"
      >
        室内环境
      </NavigationButtonBlock>
      <NavigationButtonBlock
        backgroundColor="#ED955F"
        @click="$router.push({ name: 'VisitOutdoor' })"
      >
        室外环境
      </NavigationButtonBlock>
    </div>
  </TitleBarLayout>
</template>

<script setup lang="ts"></script>

<style scoped></style>
