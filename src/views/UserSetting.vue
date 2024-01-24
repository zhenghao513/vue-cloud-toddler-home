<template>
  <PageLayout>
    <VanCellGroup>
      <VanCell
        v-for="n in 5"
        :key="n"
        is-link
        title="设置项"
      />

      <VanCell>
        <VanButton block>切换账号</VanButton>
      </VanCell>

      <VanCell>
        <VanButton
          type="warning"
          block
          @click="handleLogout"
        >
          退出
        </VanButton>
      </VanCell>
    </VanCellGroup>
  </PageLayout>
</template>

<script setup lang="ts">
const router = useRouter()
const handleLogout = () => {
  document.cookie = 'isAuthenticated=false'
  router.replace({ name: 'Login' })
}
</script>

<style scoped></style>
