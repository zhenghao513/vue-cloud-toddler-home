export const useUserinfoStore = defineStore('userinfo', () => {
  const DEFAULT_AVATAR_URL =
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'

  const avatar = ref(DEFAULT_AVATAR_URL)
  const username = ref('Administrator')

  const setAvatar = (url: string) => {
    avatar.value = url
  }

  const setUsername = (value: string) => {
    username.value = value
  }

  return { avatar, username, setAvatar, setUsername }
})
