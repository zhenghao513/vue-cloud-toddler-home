import { ToddlerInfoModel } from '@/types/form.ts'
import { useFormList } from '@/composables/useFormList.ts'

export const useSurveyStore = defineStore('survey', () => {
  const { list, add } = useFormList<ToddlerInfoModel>()

  return { list, add }
})
