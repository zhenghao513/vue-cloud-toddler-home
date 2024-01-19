export function useFormList<T>() {
  const list: Ref<T[]> = ref([])
  const add = (value: T) => {
    list.value.push(value)
  }

  return { list, add }
}
