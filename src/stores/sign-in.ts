export const useSignInStore = defineStore('sign-in', () => {
  const signInState = ref(false)
  const setSignInState = (value: boolean) => {
    signInState.value = value
  }

  return { signInState, setSignInState }
})
