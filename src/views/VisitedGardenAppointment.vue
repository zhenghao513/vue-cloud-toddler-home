<template>
  <TitlebarLayout
    backgroundColor="#61CFBE"
    title="预约参观"
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

        <VanField
          v-model="appointmentDate"
          is-link
          readonly
          name="appointmentDate"
          label="参观时间"
          placeholder="点击选择"
          :rules="[{ required: true, message: '请选择参观时间' }]"
          @click="showDatePicker = true"
        />
        <VanPopup
          v-model:show="showDatePicker"
          position="bottom"
        >
          <VanDatePicker
            :min-date="new Date()"
            @confirm="onConfirm"
            @cancel="showDatePicker = false"
          />
        </VanPopup>
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
import { useAppointmentStore } from '@/stores/appointment'
import { AppointmentFormModel } from '@/types/form.ts'
import { showDialog } from 'vant'
import 'vant/es/dialog/style'

const name = ref('')
const phoneNumber = ref('')

const appointmentDate = ref('')
const showDatePicker = ref(false)

// @ts-ignore: It's ok to ignore this compile error
const onConfirm = ({ selectedValues }) => {
  appointmentDate.value = selectedValues.join('/')
  showDatePicker.value = false
}

const appointmentStore = useAppointmentStore()
const onSubmit = (values: AppointmentFormModel) => {
  appointmentStore.addAppointment(values)
  showDialog({
    title: '提交成功',
    message: '我们会在24小时内处理您的请求，请耐心等待。',
  }).then(() => history.back())
}
</script>

<style scoped></style>
