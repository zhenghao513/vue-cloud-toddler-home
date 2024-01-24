import type { FieldInstance } from 'vant'

export function useFieldEdit(fieldRef: Ref<FieldInstance | null>) {
  const isEdit = ref(false)

  watch(fieldRef, () => {
    if (fieldRef.value !== null) {
      fieldRef.value?.focus()
    }
  })

  return { isEdit }
}
