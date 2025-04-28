<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";


</script>

<template>


  <div class="appGrid">
    <Navbar/>
    <RouterView />
  </div>

</template>

<style scoped lang="scss">

.appGrid{
  display: grid;
  grid-template-rows: 1fr;
  height: 100vh;
  padding-top: 100px;
  position: relative;
}


</style>
