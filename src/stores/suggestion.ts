import { SuggestionFormModel } from '@/types/form.ts'

export const useSuggestionStore = defineStore('suggestion', () => {
  const suggestionList = ref<SuggestionFormModel[]>([])

  const addSuggestion = (suggestion: SuggestionFormModel) => {
    suggestionList.value.push(suggestion)
  }

  return { suggestionList, addSuggestion }
})
