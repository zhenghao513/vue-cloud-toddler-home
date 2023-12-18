export const useSignInStore = defineStore('sign-in', () => {
  const signIn = ref(false)

  return { signIn }
})
