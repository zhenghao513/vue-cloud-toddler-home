<template>
  <div class="userinfo">
    <div class="userinfo__avatar">
      <div class="userinfo__avatar--circle">
        <span class="userinfo__avatar-image">
          <img
            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            alt="avatar"
          />
        </span>
      </div>
    </div>

    <div class="userinfo__inner">
      <div class="userinfo__username">
        <span>{{ username ?? 'Administrator' }}</span>
      </div>
      <div class="userinfo__edit-button">
        <VanButton
          type="primary"
          size="small"
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
