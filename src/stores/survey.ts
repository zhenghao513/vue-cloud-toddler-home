import { ChildInfo } from '@/types/info'

export const useSurveyStore = defineStore('survey', () => {
  const surveyList = ref<ChildInfo[]>([])

  const addSurvey = (survey: ChildInfo) => {
    surveyList.value.push(survey)
  }

  return { surveyList, addSurvey }
})
