<template>
  <div class="avatar">
    <div class="avatar__image--circle">
      <span class="avatar__image--height-full-width-full">
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
.avatar {
  flex-shrink: 0;
  margin-right: 12px;
  cursor: pointer;
}

.avatar__image--circle {
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

.avatar__image--circle {
  overflow: hidden;
}

.avatar__image--height-full-width-full {
  display: inline-block;
  width: 100%;
  height: 100%;
}

.avatar__image--height-full-width-full img {
  width: 100%;
  height: 100%;
}
</style>
