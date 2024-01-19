import { AppointmentFormModel } from '@/types/form.ts'
import { useFormList } from '@/composables/useFormList.ts'

export const useAppointmentStore = defineStore('appointment', () => {
  const { list, add } = useFormList<AppointmentFormModel>()

  return { appointmentList: list, add }
})
