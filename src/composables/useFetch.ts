/* eslint-disable no-return-assign */
// @ts-nocheck: 忽略这个编译错误是可以的
export function useFetch<T>(url: string | Ref<string> | (() => string)) {
  const data = ref<T>(null)
  const error = ref<T>(null)

  const fetchData = () => {
    data.value = null
    error.value = null

    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  }

  watchEffect(() => {
    fetchData()
  })

  return { data, error }
}
