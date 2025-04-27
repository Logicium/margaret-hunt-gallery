<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SearchIcon from "@/assets/icons/SearchIcon.vue";

</script>

<template>
  <nav>
    <div class="navMenu">
      <div class="line"></div>
      <div class="line"></div>
    </div>
    <RouterLink to="/"><div class="title">MARGARET HUNT GALLERY</div></RouterLink>
    <div class="search"><SearchIcon/></div>
  </nav>

<!--  <div class="links">-->
<!--  <RouterLink to="/">Home</RouterLink>-->
<!--  <RouterLink to="/event">Event</RouterLink>-->
<!--  <RouterLink to="/about">Gallery</RouterLink>-->
<!--</div>-->
</template>

<style scoped lang="scss">

@import "../assets/Library";

nav{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  padding: $padding;
}

.header{
  text-align: center;
}

.title{
  align-self: center;
  text-align: center;
  cursor: pointer;
}

.navMenu{
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 45px;
  height: 30px;
  justify-content: space-evenly;
  cursor: pointer;
}

.search{
  align-self: center;
  margin-left: auto;
  cursor: pointer;
}

.line{
  height: 2px;
  background-color: black;
  width: 100%;
}

</style>