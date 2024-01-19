import { AppointmentFormModel } from '@/types/form.ts'

export const useAppointmentStore = defineStore('appointment', () => {
  const appointmentList = ref<AppointmentFormModel[]>([])

  const addAppointment = (appointment: AppointmentFormModel) => {
    appointmentList.value.push(appointment)
  }

  return { appointmentList, addAppointment }
})
