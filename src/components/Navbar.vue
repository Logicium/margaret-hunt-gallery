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
    <RouterLink to="/" class="titleWrap"><div class="title">MARGARET HUNT GALLERY</div></RouterLink>
    <div class="search"><SearchIcon/></div>
  </nav>

</template>

<style scoped lang="scss">

@import "../assets/Library";

nav{
  display: grid;
  grid-template-columns: repeat(5,1fr);
  padding: $padding;
  position: fixed;
  height: 100px;
  width: 100%;
  background-color: white;
}

.header{
  text-align: center;
}

.titleWrap{
  cursor: pointer;
  grid-column: span 3;
  align-self: center;
}

.title{

  text-align: center;
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