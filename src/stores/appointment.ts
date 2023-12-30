import { AppointmentInfo } from '@/types/info'

export const useAppointmentStore = defineStore('appointment', () => {
  const appointmentList = ref<AppointmentInfo[]>([])

  const addAppointment = (appointment: AppointmentInfo) => {
    appointmentList.value.push(appointment)
  }

  return { appointmentList, addAppointment }
})
