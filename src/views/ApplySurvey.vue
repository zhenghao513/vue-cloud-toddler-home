<template>
  <TitlebarLayout
    backgroundColor="#BDDB69"
    title="问卷调查"
  >
    <VanForm
      required="auto"
      @submit="onSubmit"
    >
      <h2 class="block__title">家庭基本信息</h2>

      <VanCellGroup inset>
        <VanField
          v-model="childName"
          name="childName"
          label="姓名"
          placeholder="请输入"
          :rules="[{ required: true, message: '请输入孩子姓名' }]"
        />

        <VanField
          name="gender"
          label="性别"
          :rules="[{ required: true, message: '请选择孩子性别' }]"
        >
          <template #input>
            <VanRadioGroup
              v-model="gender"
              direction="horizontal"
            >
              <VanRadio name="boy">男</VanRadio>
              <VanRadio name="girl">女</VanRadio>
            </VanRadioGroup>
          </template>
        </VanField>

        <VanField
          v-model="birthday"
          is-link
          readonly
          name="birthday"
          label="出生日期"
          placeholder="点击选择"
          :rules="[{ required: true, message: '请选择孩子出生日期' }]"
          @click="showBirthdayPicker = true"
        />
        <VanPopup
          v-model:show="showBirthdayPicker"
          position="bottom"
        >
          <VanDatePicker
            :min-date="minDate"
            :max-date="maxDate"
            @confirm="onConfirm"
            @cancel="showBirthdayPicker = false"
          />
        </VanPopup>

        <VanField
          v-model="guardian"
          name="guardian"
          label="家长姓名"
          placeholder="请输入"
          :rules="[{ required: true, message: '请输入家长姓名' }]"
        />

        <VanField
          v-model="guardianPhone"
          name="guardianPhone"
          label="联系方式"
          placeholder="请输入"
          :rules="[{ required: true, message: '请输入联系方式' }]"
        />

        <VanField
          v-model="address"
          name="address"
          label="家庭住址"
          placeholder="为后续的接送安排做准备"
          :rules="[{ required: true, message: '请输入家庭住址' }]"
        />
      </VanCellGroup>

      <h2 class="block__title">孩子健康状况</h2>

      <VanCellGroup inset>
        <VanField
          name="healthStatus"
          label="健康状况"
          :rules="[{ required: true, message: '请勾选' }]"
        >
          <template #input>
            <VanCheckboxGroup
              v-model="healthStatus"
              direction="horizontal"
            >
              <VanCheckbox
                name="过敏史"
                shape="square"
              >
                过敏史
              </VanCheckbox>
              <VanCheckbox
                name="慢性疾病"
                shape="square"
              >
                慢性疾病
              </VanCheckbox>
            </VanCheckboxGroup>
          </template>
        </VanField>

        <VanField
          v-model="otherHealthStatus"
          name="otherHealthStatus"
          label="其他"
          placeholder="如有，请填写"
        />
      </VanCellGroup>

      <h2 class="block__title">教育期望与特长</h2>

      <VanCellGroup inset>
        <VanField
          v-model="educationalExpectation"
          name="educationalExpectation"
          label="教育期望"
          placeholder="例如是否希望孩子学习某种特长等"
          :rules="[{ required: true, message: '请输入对孩子的教育期望' }]"
        />
      </VanCellGroup>

      <h2 class="block__title">孩子兴趣爱好</h2>

      <VanCellGroup inset>
        <VanField
          v-model="hobby"
          name="hobby"
          label="兴趣爱好"
          placeholder="孩子的兴趣爱好"
          :rules="[{ required: true, message: '请输入孩子的兴趣爱好' }]"
        />
      </VanCellGroup>

      <h2 class="block__title">特殊需求与建议</h2>

      <VanCellGroup inset>
        <VanField
          v-model="specialNeedsAndSuggestions"
          name="specialNeedsAndSuggestions"
          label="其他要求"
          placeholder="对学校服务的期望与建议"
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
import { useSurveyStore } from '@/stores/survey'
import { ChildInfoModel } from '@/types/global'
import { showDialog } from 'vant'
import 'vant/es/dialog/style'

const childName = ref('')
const gender = ref('')

const birthday = ref('')
const showBirthdayPicker = ref(false)

// @ts-ignore: It's ok to ignore this compile error
const onConfirm = ({ selectedValues }) => {
  birthday.value = selectedValues.join('/')
  showBirthdayPicker.value = false
}

const guardian = ref('')
const guardianPhone = ref('')
const address = ref('')

const healthStatus = ref([])
const otherHealthStatus = ref('')
const educationalExpectation = ref('')
const hobby = ref('')
const specialNeedsAndSuggestions = ref('')

const surveyStore = useSurveyStore()
const onSubmit = (values: ChildInfoModel) => {
  surveyStore.addSurvey(values)
  showDialog({
    title: '提交成功',
    message: '我们会在24小时内处理您的请求，请耐心等待。',
  }).then(() => history.back())
}

const currentDate = new Date()
const minDate = computed(() => {
  return new Date(currentDate.getFullYear() - 5, 0, 1)
})
const maxDate = computed(() => {
  return new Date(currentDate.getFullYear() - 2, 11, 31)
})
</script>

<style scoped>
.page-layout :deep(.slot-container) {
  margin-top: 0;
}
</style>
