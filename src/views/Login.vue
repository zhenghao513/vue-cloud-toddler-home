<template>
  <div class="container">
    <div class="content">
      <div class="content-inner">
        <LoginForm />
      </div>
      <a-layout-footer>
        <div class="footer">云幼家</div>
      </a-layout-footer>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container {
  display: flex;
  height: 100vh;
  margin-top: 0;
}

.banner {
  width: 550px;
  background: linear-gradient(163.85deg, #1d2129 0%, #00308f 100%);
}

@media (max-width: 912px) {
  .banner {
    display: none;
  }
}

.content {
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
}

.footer {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  font-size: 14px;
}

.container .footer {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: #4e5969;
  text-align: center;
}
</style>
