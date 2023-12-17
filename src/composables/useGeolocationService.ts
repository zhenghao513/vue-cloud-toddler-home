class GeolocationService {
  getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            resolve(position)
          },
          (error) => {
            reject(error)
          },
        )
      } else {
        reject(new Error('Geolocation is not supported by this browser.'))
      }
    })
  }
}

export default function useGeolocationService() {
  const geolocationService = new GeolocationService()
  const lat = ref(0)
  const lng = ref(0)
  const error = ref(null)

  geolocationService
    .getCurrentPosition()
    .then((position) => {
      lat.value = position.coords.latitude
      lng.value = position.coords.longitude
    })
    // eslint-disable-next-line @typescript-eslint/no-shadow
    .catch((error) => {
      // eslint-disable-next-line no-param-reassign
      error.value = error
    })

  return { lat, lng, error }
}
