<script setup lang="ts">

import ArrowIcon from "@/assets/icons/ArrowIcon.vue";

const props = defineProps({
  data: { type: Object },
})

</script>

<template>
  <div class="card">
    <div class="title">{{data.title.toUpperCase()}}</div>
    <div class="small">Tags: {{data.tags}}</div>
    <div class="button empty">View Piece<ArrowIcon/></div>
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