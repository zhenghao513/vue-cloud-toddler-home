import { UserSuggestionModel } from '@/types/global'

export const useSuggestionStore = defineStore('suggestion', () => {
  const suggestionList = ref<UserSuggestionModel[]>([])

  const addSuggestion = (suggestion: UserSuggestionModel) => {
    suggestionList.value.push(suggestion)
  }

  return { suggestionList, addSuggestion }
})
