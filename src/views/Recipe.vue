<template>
  <PageLayout>
    <div class="container">
      <div
        v-if="isLoading"
        class="wrapper"
      >
        <van-loading
          color="#1989fa"
          vertical
          :size="96"
        >
          <div
            ref="copywritingRef"
            class="copywriting"
          >
            {{ loadingText }}
          </div>
        </van-loading>
      </div>

      <VanList
        v-else
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
                    :src="item.imageUrl"
                  />
                </template>
                <ACardMeta :title="item.title">
                  <template #description>{{ item.ingredients }}</template>
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
import { queryRecipeList } from '@/api/list'

interface Recipe {
  id: number
  title: string
  ingredients: string
  imageUrl: string
}

const recipes = ref<Recipe[]>([])
const loading = ref(false)
const finished = ref(false)

const pageProvider = (): Promise<unknown[]> =>
  new Promise((resolve) => resolve(recipes.value))

const length = computed(() => {
  return recipes.value.length
})

const finishedText = computed(() => {
  return `总计 ${length.value} 道菜`
})

const isLoading = computed(() => {
  return !recipes.value.length
})

const fetchData = async () => {
  const { data } = await queryRecipeList()
  recipes.value.push(...data)
}

const onLoad = async () => {
  await fetchData()

  loading.value = false

  if (recipes.value.length >= 100) {
    finished.value = true
  }
}

onMounted(async () => {
  await fetchData()
})

const copywritingRef = ref<HTMLDivElement | null>(null)
const copywritingList = ref([
  '青，出于蓝而胜于蓝；冰，水为之而寒于水。',
  '剑阁峥嵘而崔嵬，一夫当关，万夫莫开。',
])
const copywritingIndex = ref(0)
const loadingText = computed(() => {
  return copywritingList.value[
    copywritingIndex.value % copywritingList.value.length
  ]
})

let updateIndex = 0
let updateOpacity = 0
watch(
  isLoading,
  (newValue) => {
    if (newValue) {
      // 7s 之后更新下一条，2s 留给淡出动画
      setTimeout(() => {
        updateIndex = setInterval(() => {
          if (copywritingRef.value) {
            copywritingRef.value.style.opacity = '1'
          }
          copywritingIndex.value++
        }, 5000)
      }, 2000)

      updateOpacity = setInterval(() => {
        if (copywritingRef.value) {
          copywritingRef.value.style.opacity = '0'
        }
      }, 5000)
    } else {
      clearInterval(updateIndex)
      clearInterval(updateOpacity)
    }
  },
  { immediate: true },
)

const handlePreview = (index: number) => {
  showImagePreview({
    images: recipes.value.map((recipe) => recipe.imageUrl),
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

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(
    100vh - var(--van-nav-bar-height) - var(--default-padding-top) -
      var(--default-padding-bottom-fixed)
  );
}

.grid {
  display: grid;
  grid-gap: 12px;
  grid-template-columns: repeat(2, 1fr);
}

.item {
  margin-top: 0;
}

.copywriting {
  opacity: 1;
  transition: opacity 2s;
}
</style>
