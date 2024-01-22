<template>
  <PageLayout>
    <div class="noticebar">
      <VanNoticeBar
        :text="currentDate"
        left-icon="calendar-o"
      >
        <template #right-icon>{{ lng }}, {{ lat }}</template>
      </VanNoticeBar>
    </div>

    <AmapContainer :center="[lng, lat]" />

    <div class="button">
      <VanButton
        :disabled="signInState"
        @click="handleSignIn"
      >
        <Transition
          name="slide-up"
          mode="out-in"
        >
          <span
            v-if="!signInState"
            class="button__text"
          >
            签到
          </span>
          <span
            v-else
            class="button__text"
          >
            已签到
          </span>
        </Transition>
        <span class="button__time">{{ currentTime }}</span>
      </VanButton>
    </div>

    <Transition name="van-fade">
      <span
        v-show="!signInState"
        class="hint__text"
      >
        今日你还未签到
      </span>
    </Transition>

    <div class="noticebar">
      <VanNoticeBar
        color="#1989fa"
        background="#ecf9ff"
        left-icon="info-o"
      >
        云幼家只会在你主动签到时获取位置信息
      </VanNoticeBar>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import useGeolocationService from '@/composables/useGeolocationService'
import { useSignInStore } from '@/stores/sign-in'
import launchConfetti from '@/utils/confetti'
import { showLoadingToast, showSuccessToast } from 'vant'
import 'vant/es/toast/style'

const date = ref(new Date())

// 获取用户在地理空间中的位置
const { lat, lng } = useGeolocationService()

const currentTime = computed(() => {
  return date.value.toLocaleTimeString('zh-CN', { timeStyle: 'short' })
})
const currentDate = computed(() => {
  return date.value.toLocaleDateString('zh-CN', { dateStyle: 'medium' })
})

const updateCurrentTime = () => {
  date.value = new Date()
}

let intervalID = 0

onMounted(() => {
  updateCurrentTime()
  intervalID = setInterval(() => {
    updateCurrentTime()
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(intervalID)
})

const signInStore = useSignInStore()
const { signInState } = storeToRefs(signInStore)
const { setSignInState } = signInStore
const handleSignIn = () => {
  showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    onClose() {
      showSuccessToast('签到成功')
      launchConfetti()
      setSignInState(true)
    },
  })
}
</script>

<style scoped>
.page-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0;
}

.container__map {
  min-width: 100%;
  min-height: 300px;
  margin-top: 0;
}

.button {
  margin-top: 1em;
}

.van-button {
  background-color: #f7b55f;
  border-radius: 50%;
  color: white;
  height: 150px;
  width: 150px;
}

.van-button :deep(.van-button__text) {
  display: flex;
  flex-direction: column;
}

.button__text {
  font-size: 24px;
}

.button__time {
  margin-top: 0;
  font-size: 30px;
}

.noticebar {
  min-width: 100%;
}

.noticebar:last-child {
  margin-top: auto;
}

.hint__text {
  font-size: 10px;
  color: #666666;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
