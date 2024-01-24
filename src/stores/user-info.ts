export const useUserInfoStore = defineStore('user-info', () => {
  const BASE_AVATAR_URL =
    'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp'

  const BASE_USER_ID = document.cookie
    .replace(/(?:(?:^|.*;\s*)userId\s*\=\s*([^;]*).*$)|^.*$/, '$1')
    .split('-')[0]

  const userId = ref(BASE_USER_ID)
  const avatarUrl = ref(BASE_AVATAR_URL)
  const nickName = ref('admin')

  const setUserId = (id: string) => {
    userId.value = id
  }

  const setAvatarUrl = (url: string) => {
    avatarUrl.value = url
  }

  const setNickName = (value: string) => {
    nickName.value = value
  }

  return {
    avatarUrl,
    nickName,
    userId,
    setUserId,
    setAvatarUrl,
    setNickName,
  }
})
