import { ToddlerInfoModel } from '@/types/form.ts'

export const useSurveyStore = defineStore('survey', () => {
  const surveyList = ref<ToddlerInfoModel[]>([])

  const addSurvey = (survey: ToddlerInfoModel) => {
    surveyList.value.push(survey)
  }

  return { surveyList, addSurvey }
})
