<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SearchIcon from "@/assets/icons/SearchIcon.vue";
import {ref} from "vue";

const props = defineProps({
  showNav: {type: Boolean, required: true},
  showNavClick: {type: Function, required: true},
  resetNav: {type: Function, required: true}
})

</script>

<template>
  <nav>
    <div class="navMenuBtn" @click="showNavClick()">
      <div class="btnWrap" :class="{active: showNav}">
        <div class="line l1"></div>
        <div class="line l2"></div>
      </div>
    </div>
    <RouterLink to="/" class="titleWrap" @click="resetNav()"><div class="title">MARGARET HUNT GALLERY</div></RouterLink>
    <div class="search"><SearchIcon/></div>

    <div class="navMenu" :class="!showNav? 'hidden':''">
      <div class="links">
        <RouterLink to="/" class="big" @click="resetNav()">HOME</RouterLink>
        <RouterLink to="/event" class="big" @click="resetNav()">EVENT</RouterLink>
        <RouterLink to="/gallery" class="big" @click="resetNav()">GALLERY</RouterLink>
      </div>
      <div class="disclosures">
        <div class="small top">Margaret Hunt Gallery © 2025 </div>
        <div class="small top">Made by Apotome Labs</div>
      </div>
    </div>

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
  z-index: 1;
}

.navMenu{
  padding: $padding;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  transition: 1s;
  opacity: 1;
  height: 100%;
  background-color: black;
  color: white;
  width: 33%;
  transform: translateX(0%);
}

.hidden{
  visibility: hidden;
  opacity: 0;
  transition: 1s ease-in-out;
  transform: translateX(-10%);
}

.active .line{
  background-color: white;
  transition: 1s;
}

.active .line.l1{
  transform: rotate(45deg) translate(4px,4px);
}
.active .line.l2{
  transform: rotate(-45deg) translate(4px,-4px);
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

.links{
  display: flex;
  flex-direction: column;
  a{
    color: white;
    text-decoration: none;
    transition: 0.5s;
    border-bottom: 2px solid transparent;
    width: fit-content;
  }
  a:hover{
    font-weight: 500;
    transition: 0.5s;
    border-bottom: 2px solid white;
  }
}


.navMenuBtn{
  position: relative;
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 45px;
  height: 30px;
  justify-content: space-evenly;
  z-index: 1;
}

.btnWrap{
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;
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
  transition: 1s;
}

</style>