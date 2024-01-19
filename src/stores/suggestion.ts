import type { SuggestionFormModel } from '@/types/form.ts'
import { useFormList } from '@/composables/useFormList.ts'

export const useSuggestionStore = defineStore('suggestion', () => {
  const { list, add } = useFormList<SuggestionFormModel>()

  return { list, add }
})
