<template>
  <div class="userinfo">
    <AppAvatar />

    <div class="userinfo__inner">
      <div class="userinfo__username">
        <span>{{ username ?? 'Administrator' }}</span>
      </div>
      <div class="userinfo__edit-button">
        <VanButton
          type="primary"
          size="small"
          @click="$router.push({ name: 'UserinfoEdit' })"
        >
          编辑资料
        </VanButton>
      </div>
    </div>
  </div>

  <UserData />
</template>

<script setup lang="ts">
const username = ref<string>()
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-wrap: nowrap;
  font-size: 14px;
  min-height: 72px;
  padding: 12px;
  background-color: white;
}

.userinfo * + * {
  margin-top: 0;
}

.userinfo__inner {
  flex: 1;
  display: flex;
}

.userinfo__username {
  margin-right: 8px;
  color: rgb(78, 89, 105);
  font-size: 30px;
}

.userinfo__edit-button {
  margin-left: 0.5em;
}
</style>
