<template>
  <div>
    <TheUsersTableView :nameUserPage="$route.name" />
  </div>
</template>

<script setup>
import TheUsersTableView from "../components/Reuseable/TheUsersTableView.vue";
</script>

<style lang="scss" scoped></style>
