<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from "@/components/Navbar.vue";
import {ref} from "vue";

const showNav = ref(false);
const showNavClick = function (){
  showNav.value = !showNav.value;
}

</script>

<template>

  <div class="appGrid">
    <Navbar :show-nav="showNav" :show-nav-click="showNavClick"/>
    <div class="appWrap" :class="{blur: showNav}">
      <RouterView />
    </div>
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

.appWrap{
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  transition: filter 1s ease-in-out;
}

.blur{
  filter: blur(5px);
  transition: filter 1s ease-in-out;
}

</style>
