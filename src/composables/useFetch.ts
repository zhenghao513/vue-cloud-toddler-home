/* eslint-disable no-return-assign */
export function useFetch<T>(url: string | Ref<string> | (() => string)) {
  const data: Ref<T | null> = ref(null)
  const error: Ref<T | null> = ref(null)

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
