<template>
  <PageLayout>
    <div class="container">
      <VanUploader :after-read="afterRead">
        <AvatarCircle :avatar-url="newAvatarUrl ?? avatarUrl" />
      </VanUploader>

      <div style="width: 100%">
        <VanCellGroup inset>
          <VanCell
            title="云幼家号"
            :value="userIdFormat"
          />

          <VanCell
            v-if="!isEditNickName"
            title="昵称"
            :value="newNickName"
            @click="isEditNickName = !isEditNickName"
          />
          <VanField
            v-else
            ref="nickNameFieldRef"
            v-model="newNickName"
            label="昵称"
            placeholder="请输入昵称"
            input-align="right"
            @blur="isEditNickName = !isEditNickName"
          />

          <VanCell
            v-if="!isEditAge"
            title="年龄"
            :value="newAge"
            @click="isEditAge = !isEditAge"
          />
          <VanField
            v-else
            v-model="newAge"
            readonly
            input-align="right"
            label="年龄"
            @click="isEditAge = true"
          />
          <VanPopup
            v-model:show="isEditAge"
            position="bottom"
          >
            <VanPicker
              :columns="columns"
              @confirm="onConfirm"
              @cancel="isEditAge = false"
            />
          </VanPopup>
        </VanCellGroup>
      </div>

      <div style="width: 100%; padding: 0 16px">
        <VanButton
          block
          type="success"
          @click="handleSaveChange"
        >
          保存更改
        </VanButton>
      </div>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import type {
  FieldInstance,
  UploaderFileListItem,
  PickerColumn,
  PickerConfirmEventParams,
} from 'vant'
import { useUserInfoStore } from '@/stores/user-info.ts'
import { useFieldEdit } from '@/composables/useFieldEdit'

const { avatarUrl, nickName, userId, age } = storeToRefs(useUserInfoStore())
const userIdFormat = computed(() => {
  return userId.value.split('-')[0]
})

// 更改昵称
const nickNameFieldRef = ref<FieldInstance | null>(null)
const { isEdit: isEditNickName } = useFieldEdit(nickNameFieldRef)

// 更改年龄
const { isEdit: isEditAge } = useFieldEdit()
const newAge = ref(age.value)
const columns: PickerColumn = [
  { text: 3, value: 3 },
  { text: 4, value: 4 },
  { text: 5, value: 5 },
]
const onConfirm = ({ selectedOptions }: PickerConfirmEventParams) => {
  newAge.value = selectedOptions[0]?.text as number
  isEditAge.value = false
}

const newAvatarUrl = ref()
const newNickName = ref(nickName.value)

// 更改头像
const afterRead = (file: UploaderFileListItem | UploaderFileListItem[]) => {
  newAvatarUrl.value = (file as UploaderFileListItem).objectUrl
}

const handleSaveChange = () => {
  if (newAvatarUrl.value) {
    avatarUrl.value = newAvatarUrl.value
  }

  nickName.value = newNickName.value
  age.value = Number(newAge.value)
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
