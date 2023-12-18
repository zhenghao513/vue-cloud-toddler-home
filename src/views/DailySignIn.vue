<template>
  <PageLayout>
    <div class="wrapper">
      <VanNoticeBar
        :text="currentDate"
        left-icon="calendar-o"
      />
    </div>

    <AppMapContainer :center="[lng, lat]" />

    <div class="button-wrapper">
      <VanButton
        :disabled="signIn"
        @click="handleSignIn"
      >
        <span
          v-if="!signIn"
          class="button-text"
        >
          签到
        </span>
        <span class="current-time">{{ currentTime }}</span>
      </VanButton>
    </div>

    <Transition name="van-fade">
      <span
        v-show="!signIn"
        class="button-text--bottom"
      >
        今日你还未签到
      </span>
    </Transition>

    <div class="wrapper">
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

const { signIn } = storeToRefs(useSignInStore())
function handleSignIn() {
  showLoadingToast({
    message: '加载中...',
    forbidClick: true,
    onClose() {
      showSuccessToast('签到成功')

      signIn.value = true
    },
  })
}
</script>

<style scoped>
.page-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#map-container {
  min-width: 100%;
  min-height: 300px;
  margin-top: 0;
}

.button-wrapper {
  margin-top: 1em;
}

.van-button {
  background-color: #f7b55f;
  border-radius: 50%;
  color: white;
  height: 150px;
  width: 150px;
}

.button-text {
  font-size: 24px;
}

.current-time {
  font-size: 30px;
}

.wrapper {
  min-width: 100%;
}

.wrapper:last-child {
  margin-top: auto;
}

.button-text--bottom {
  font-size: 10px;
  color: #666666;
}
</style>
