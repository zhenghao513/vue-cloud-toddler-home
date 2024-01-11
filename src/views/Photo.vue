<template>
  <PageLayout>
    <div class="container">
      <VanList
        v-model:loading="loading"
        :finished="finished"
        :finished-text="finishedText"
        @load="onLoad"
      >
        <Grid
          :length="length"
          :pageSize="20"
          :pageProvider="pageProvider"
          class="grid"
        >
          <template #probe>
            <div class="item">Probe</div>
          </template>

          <template #placeholder="{ index, style }">
            <div
              class="item"
              :style="style"
            >
              Placeholder {{ index }}
            </div>
          </template>

          <template #default="{ item, index, style }">
            <div
              class="item"
              :style="style"
              @click="handlePreview(index)"
            >
              <ACard
                hoverable
                style="width: 100%; height: 100%"
              >
                <template #cover>
                  <img
                    alt="example"
                    :src="item.url"
                  />
                </template>
                <ACardMeta title="Shot on iPhone">
                  <template #description>{{
                    getRandomDateTime().toLocaleDateString('zh-CN')
                  }}</template>
                </ACardMeta>
              </ACard>
            </div>
          </template>
        </Grid>
      </VanList>
    </div>
  </PageLayout>
</template>

<script setup lang="ts">
import Grid from 'vue-virtual-scroll-grid'
import { showImagePreview } from 'vant'
import 'vant/es/image-preview/style'
import { queryPhotoList } from '@/api/list'

const getRandomDateTime = () => {
  const min = new Date(2020, 0, 1).getTime()
  const max = new Date(2022, 5, 30).getTime()
  const randomDate = new Date(min + Math.random() * (max - min + 1))
  return randomDate
}

interface Photo {
  filename: string
  url: string
}

const photos = ref<Photo[]>([])
const loading = ref(false)
const finished = ref(false)

const pageProvider = (): Promise<unknown[]> =>
  new Promise((resolve) => resolve(photos.value))

const length = computed(() => {
  return photos.value.length
})

const finishedText = computed(() => {
  return `共 ${length.value} 张照片`
})

const fetchData = async () => {
  const { data } = await queryPhotoList()
  photos.value.push(...data)
}

const onLoad = async () => {
  await fetchData()

  loading.value = false

  if (photos.value.length >= 7) {
    finished.value = true
  }
}

onMounted(async () => {
  await fetchData()
})

const handlePreview = (index: number) => {
  showImagePreview({
    images: photos.value.map((photo) => photo.url),
    startPosition: index,
  })
}
</script>

<style scoped>
.container {
  padding-top: var(--default-padding-top);
  padding-left: var(--default-padding-start);
  padding-right: var(--default-padding-end);
}

.grid {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 1fr);
}

.item {
  margin-top: 0;
}
</style>
