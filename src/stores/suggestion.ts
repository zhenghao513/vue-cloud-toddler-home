import { SuggestionInfo } from '@/types/info'

export const useSuggestionStore = defineStore('suggestion', () => {
  const suggestionList = ref<SuggestionInfo[]>([])

  const addSuggestion = (suggestion: SuggestionInfo) => {
    suggestionList.value.push(suggestion)
  }

  return { suggestionList, addSuggestion }
})
