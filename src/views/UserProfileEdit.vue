<template>
  <PageLayout>
    <div class="container">
      <VanUploader :after-read="afterRead">
        <AvatarCircle :avatar-url="newAvatarUrl ?? avatarUrl" />
      </VanUploader>

      <div style="width: 100%">
        <VanCellGroup inset>
          <VanCell
            title="ID"
            :value="userId"
          />

          <VanCell
            v-if="!isEditNickName"
            title="用户名"
            :value="newNickName"
            @click="isEditNickName = !isEditNickName"
          />
          <VanField
            v-else
            ref="fieldRef"
            v-model="newNickName"
            label="用户名"
            placeholder="请输入用户名"
            input-align="right"
            @blur="isEditNickName = !isEditNickName"
          />
        </VanCellGroup>
      </div>

      <VanButton
        type="success"
        @click="handleSaveChange"
      >
        保存更改
      </VanButton>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import type { FieldInstance, UploaderFileListItem } from 'vant'
import { useUserInfoStore } from '@/stores/user-info.ts'

const { avatarUrl, nickName, userId } = storeToRefs(useUserInfoStore())

const isEditNickName = ref(false)

const fieldRef = ref<FieldInstance | null>(null)
watch(fieldRef, () => {
  if (fieldRef.value !== null) {
    fieldRef.value?.focus()
  }
})

const newAvatarUrl = ref()
const newNickName = ref(nickName.value)

const afterRead = (file: UploaderFileListItem | UploaderFileListItem[]) => {
  newAvatarUrl.value = (file as UploaderFileListItem).objectUrl
}

const handleSaveChange = () => {
  if (newAvatarUrl.value) {
    avatarUrl.value = newAvatarUrl.value
  }

  nickName.value = newNickName.value
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(
    100vh - var(--van-nav-bar-height) - var(--default-padding-bottom-fixed)
  );
  padding-top: var(--default-padding-top);
  padding-left: var(--default-padding-start);
  padding-right: var(--default-padding-end);
}

.container * + * {
  margin-top: 0.5em;
}
</style>
