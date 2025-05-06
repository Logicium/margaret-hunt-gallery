<script setup lang="ts">

import {computed} from "vue";

const props = defineProps({
  data: { type: Object , required:true},
})

const imageUrl = computed(()=> 'url("'+props.data.image+'")').value;

</script>

<template>
  <div class="card image gap">

  </div>
</template>

<style scoped lang="scss">

.card{
  background-image: v-bind(imageUrl);
  min-width: 66vw;
}

@media (max-width: 480px) {
  .card{
    min-width: 90%;
  }
}

</style>