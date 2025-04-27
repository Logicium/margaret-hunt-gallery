<script setup lang="ts">

const props = defineProps({
  data: { type: Object },
})

</script>

<template>
  <div class="panel">
      <div class="infoWrap">
        <div class="title">{{data.title}}</div>
        <div class="small">{{data.tags}}</div>
        <div>{{data.desc}}</div>
      </div>

      <div class="imageWrap">

      </div>
  </div>
</template>

<style scoped lang="scss">

.panel{
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: 2s;
}

.active{
  opacity: 1;
  transition: 2s;
  visibility: visible;
}

</style>