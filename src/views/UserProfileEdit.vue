<template>
  <PageLayout>
    <div class="container">
      <VanUploader :after-read="afterRead">
        <AvatarCircle :avatar-url="newAvatar ?? avatarUrl" />
      </VanUploader>

      <div style="width: 100%">
        <VanCellGroup inset>
          <VanCell
            title="ID"
            :value="id"
          />

          <VanCell
            v-if="!isEditUsername"
            title="用户名"
            :value="newUsername"
            @click="isEditUsername = !isEditUsername"
          />
          <VanField
            v-else
            ref="fieldRef"
            v-model="newUsername"
            label="用户名"
            placeholder="请输入用户名"
            input-align="right"
            @blur="isEditUsername = !isEditUsername"
          />
        </VanCellGroup>
      </div>

      <VanButton
        type="success"
        @click="handleSave"
      >
        保存更改
      </VanButton>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import type { FieldInstance, UploaderFileListItem } from 'vant'
import { useUserInfoStore } from '@/stores/user-info.ts'

const { avatarUrl, nickName } = storeToRefs(useUserInfoStore())

const id = computed(() => {
  return Math.floor(Math.random() * (999999 - 100000)) + 100000
})

const isEditUsername = ref(false)

const fieldRef = ref<FieldInstance | null>(null)
watch(fieldRef, () => {
  if (fieldRef.value !== null) {
    fieldRef.value?.focus()
  }
})

const newAvatar = ref()
const newUsername = ref(nickName.value)

const afterRead = (file: UploaderFileListItem | UploaderFileListItem[]) => {
  newAvatar.value = (file as UploaderFileListItem).objectUrl
}

const handleSave = () => {
  if (newAvatar.value) {
    avatarUrl.value = newAvatar.value
  }

  nickName.value = newUsername.value
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
