<template>
  <PageLayout>
    <div class="container">
      <div
        v-if="isLoading"
        class="wrapper"
      >
        <van-loading color="#1989fa" />
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

          <template #default="{ item, style }">
            <div
              class="item"
              :style="style"
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
</style>
