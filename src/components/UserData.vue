<template>
  <div class="user-data">
    <div class="user-data-item">
      <span class="user-data-item__title">累计签到</span>
      <span class="user-data-item__value">{{ signInCount }} 天</span>
    </div>
    <div class="user-data-item">
      <span class="user-data-item__title">提交建议</span>
      <span class="user-data-item__value">{{ suggestionCount }} 条</span>
    </div>
    <div class="user-data-item">
      <span class="user-data-item__title">云币</span>
      <span class="user-data-item__value">💴 {{ cloudCoinCount }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSignInStore } from '@/stores/sign-in'
import { useSuggestionStore } from '@/stores/suggestion'

const { signInState } = storeToRefs(useSignInStore())
const signInCount = computed(() => {
  return new Date().getDate() - (signInState.value ? 0 : 1)
})

const { suggestionList } = storeToRefs(useSuggestionStore())
const suggestionCount = computed(() => {
  return suggestionList.value.length
})

const cloudCoinCount = computed(() => {
  return String(signInCount.value * 100).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})
</script>

<style scoped>
.user-data {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(3, 1fr);
  background-color: white;
  line-height: 1.5em;
  margin-top: 0;
}

.user-data * + * {
  margin-top: 0;
}

.user-data-item {
  font-size: 14px;
  color: rgb(78, 89, 105);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
