<template>
  <TitleBarLayout
    backgroundColor="#E87361"
    title="报名申请"
  >
    <div style="margin-top: 1.5em">
      <NavigationButtonBlock
        backgroundColor="#E87361"
        @click="$router.push({ name: 'ApplyBegin' })"
      >
        新幼儿报名
      </NavigationButtonBlock>
      <NavigationButtonBlock
        backgroundColor="#E87361"
        @click="$router.push({ name: 'ApplyOrigin' })"
      >
        原幼儿报名
      </NavigationButtonBlock>
      <NavigationButtonBlock backgroundColor="#E87361">线上缴费</NavigationButtonBlock>
    </div>
  </TitleBarLayout>
</template>

<script setup lang="ts"></script>

<style scoped></style>
