<script setup lang="ts">

import ArrowIcon from "@/assets/icons/ArrowIcon.vue";
import type {PropType, Ref} from "vue";
import type {ArtPiece} from "@/data/art.interface.ts";

const props = defineProps({
  data: { type:Object as PropType<ArtPiece>, required:true },
  showFullClick:{type:Function, required:true}
});

</script>

<template>
  <div class="card">
    <div class="title">{{data.title.toUpperCase()}}, {{data.date}}</div>
    <div class="small">Tags: {{data.tags}}</div>
    <div class="button empty" @click="showFullClick()">View Piece<ArrowIcon/></div>
  </div>
</template>

<style scoped lang="scss">

@import "../../assets/Library";

.card{
  display: flex;
  flex-direction: column;
  animation: 1s fadein forwards;
}

.button{
  margin-top: auto;
}

</style>