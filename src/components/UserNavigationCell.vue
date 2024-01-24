<template>
  <VanCellGroup>
    <VanCell
      title="预约参观"
      is-link
      :to="{ name: 'VisitAppointment' }"
    />

    <VanCell
      title="联系我们"
      is-link
      :to="{ name: 'Contact' }"
    />
  </VanCellGroup>
</template>

<script setup lang="ts"></script>

<style scoped></style>
