import { ChildInfoModel } from '@/types/global'

export const useSurveyStore = defineStore('survey', () => {
  const surveyList = ref<ChildInfoModel[]>([])

  const addSurvey = (survey: ChildInfoModel) => {
    surveyList.value.push(survey)
  }

  return { surveyList, addSurvey }
})
