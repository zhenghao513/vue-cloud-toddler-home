<template>
  <TitlebarLayout
    title="建议中心"
    background-color="#F9A01E"
  >
    <VanForm
      required="auto"
      @submit="onSubmit"
    >
      <h2 class="block__title">人员信息</h2>

      <VanCellGroup inset>
        <VanField
          v-model="name"
          name="name"
          label="姓名"
          placeholder="请输入"
          :rules="[{ required: true, message: '请输入姓名' }]"
        />

        <VanField
          v-model="phoneNumber"
          name="phoneNumber"
          label="手机号"
          placeholder="请输入"
          :rules="[{ required: true, message: '请输入手机号' }]"
        />

        <van-field
          name="isPublicInternet"
          label="是否外网公开"
        >
          <template #input>
            <van-switch v-model="isPublicInternet" />
          </template>
        </van-field>
      </VanCellGroup>

      <h2 class="block__title">事项信息</h2>

      <VanCellGroup inset>
        <VanField
          v-model="title"
          name="title"
          label="标题"
          placeholder="请输入"
          :rules="[{ required: true, message: '请输入标题' }]"
        />

        <van-field
          v-model="content"
          name="content"
          rows="1"
          autosize
          label="内容"
          type="textarea"
          placeholder="请输入"
          :rules="[{ required: true, message: '请输入内容' }]"
        />
      </VanCellGroup>
      <div style="margin: 16px">
        <VanButton
          round
          block
          type="primary"
          native-type="submit"
        >
          提交
        </VanButton>
      </div>
    </VanForm>
  </TitlebarLayout>
</template>

<script setup lang="ts">
import { useSuggestionStore } from '@/stores/suggestion'
import { UserSuggestionModel } from '@/types/global'
import { showDialog } from 'vant'
import 'vant/es/dialog/style'

const name = ref('')
const phoneNumber = ref('')
const isPublicInternet = ref(false)

const title = ref('')
const content = ref('')

const suggestionStore = useSuggestionStore()
const onSubmit = (values: UserSuggestionModel) => {
  suggestionStore.addSuggestion(values)
  showDialog({
    title: '提交成功',
    message: '我们会在24小时内处理您的请求，请耐心等待。',
  }).then(() => history.back())
}
</script>

<style scoped>
.page-layout :deep(.slot-container) {
  margin-top: 0;
}
</style>
