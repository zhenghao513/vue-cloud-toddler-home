export const useUserInfoStore = defineStore('user-info', () => {
  const BASE_AVATAR_URL =
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'

  const avatarUrl = ref(BASE_AVATAR_URL)
  const nickName = ref('admin')

  const setAvatarUrl = (url: string) => {
    avatarUrl.value = url
  }

  const setNickName = (value: string) => {
    nickName.value = value
  }

  return {
    avatarUrl,
    nickName,
    setAvatarUrl,
    setNickName,
  }
})
