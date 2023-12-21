import { UserAppointmentModel } from '@/types/global'

export const useAppointmentStore = defineStore('appointment', () => {
  const appointmentList = ref<UserAppointmentModel[]>([])

  const addAppointment = (appointment: UserAppointmentModel) => {
    appointmentList.value.push(appointment)
  }

  return { appointmentList, addAppointment }
})
