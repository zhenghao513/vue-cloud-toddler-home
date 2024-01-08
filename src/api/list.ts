export function queryRecipeList() {
  return axios.get('/recipe')
}

export function queryPhotoList() {
  return axios.get('/photo')
}
