<template>
  <div class="user-info__avatar">
    <div class="user-info__avatar--circle">
      <span class="user-info__avatar-image">
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
.user-info__avatar {
  flex-shrink: 0;
  margin-right: 12px;
  cursor: pointer;
}

.user-info__avatar--circle {
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

.user-info__avatar--circle {
  overflow: hidden;
}

.user-info__avatar-image {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.user-info__avatar-image img {
  width: 100%;
  height: 100%;
}
</style>
