<template>
  <div class="userinfo__avatar">
    <div class="userinfo__avatar--circle">
      <span class="userinfo__avatar-image">
        <img
          :src="avatarUrl"
          alt="avatar"
        />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  avatarUrl: string
}>()
</script>

<style scoped>
.userinfo__avatar {
  flex-shrink: 0;
  margin-right: 12px;
  cursor: pointer;
}

.userinfo__avatar--circle {
  border-radius: 50%;
  position: relative;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  width: 72px;
  height: 72px;
  color: rgb(255, 255, 255);
  font-size: 20px;
  white-space: nowrap;
  vertical-align: middle;
  background-color: rgb(201, 205, 212);
}

.userinfo__avatar--circle {
  overflow: hidden;
}

.userinfo__avatar-image {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.userinfo__avatar-image img {
  max-width: 100%;
  max-height: 100%;
}
</style>
