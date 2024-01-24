<template>
  <div class="user-info">
    <AvatarCircle :avatar-url="avatarUrl" />

    <div class="user-info__inner">
      <div class="user-info__nick-name">
        <span>{{ nickName }}</span>
      </div>
      <div class="user-info__edit-button">
        <VanButton
          type="primary"
          size="small"
          @click="$router.push({ name: 'UserProfileEdit' })"
        >
          编辑资料
        </VanButton>
      </div>
    </div>
  </div>

  <UserProfileDataPanel />
</template>

<script setup lang="ts">
import { useUserInfoStore } from '@/stores/user-info.ts'

const { avatarUrl, nickName } = storeToRefs(useUserInfoStore())
</script>

<style scoped>
.user-info {
  display: flex;
  flex-wrap: nowrap;
  font-size: 14px;
  min-height: 72px;
  padding: 12px;
  background-color: white;
}

.user-info * + * {
  margin-top: 0;
}

.user-info__inner {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.user-info__nick-name {
  margin-right: 8px;
  color: rgb(78, 89, 105);
  font-size: 30px;
  word-break: break-all;
}

.user-info__edit-button {
  margin-top: 0.5em;
}
</style>
