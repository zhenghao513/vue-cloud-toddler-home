<template>
  <div id="map-container"></div>
</template>

<script setup lang="ts">
import AMapLoader from '@amap/amap-jsapi-loader'

const props = defineProps<{
  center: number[]
}>()

let map: {
  plugin: (arg0: string, arg1: () => void) => void
  addControl: (arg0: any) => void
  destroy: () => void
} | null = null

onMounted(() => {
  // @ts-ignore: It's ok to ignore this compile error
  window._AMapSecurityConfig = {
    securityJsCode: '25402c48ba1bb62c7a133b93500a0011',
  }
  AMapLoader.load({
    key: 'a732397cc3a240bdee267c62086bed0f',
    version: '2.0',
    plugins: [],
  })
    .then((AMap) => {
      map = new AMap.Map('map-container', {
        viewMode: '3D',
        zoom: 11,
        center: props.center,
      })

      map = new AMap.Map('map-container')
      map?.plugin('AMap.Geolocation', () => {
        const geolocation = new AMap.Geolocation({
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
          convert: true,
          showButton: true,
          buttonPosition: 'LB',
          buttonOffset: new AMap.Pixel(10, 20),
          showMarker: true,
          showCircle: true,
          panToLocation: true,
          zoomToAccuracy: true,
        })
        map?.addControl(geolocation)
        geolocation.getCurrentPosition()
      })
    })
    .catch((e) => {
      // eslint-disable-next-line no-console
      console.log(e)
    })
})

onUnmounted(() => {
  map?.destroy()
})
</script>

<style scoped></style>
