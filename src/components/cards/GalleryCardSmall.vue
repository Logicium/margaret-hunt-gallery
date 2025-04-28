<script setup lang="ts">

import {computed, ref, watch} from "vue";

const props = defineProps({
  data: { type: Object, required:true},
})

const imageUrl = computed(()=> 'url("'+props.data.image+'")').value;

const isActive = ref(props.data.isActive);

watch(()=>props.data.isActive,(newValue,oldValue)=>{
  if(newValue){
    isActive.value = newValue;
    console.log(newValue)
  }
})

</script>

<template>

  <div class="cardWrap gap" :class="props.data.isActive ? 'active': '' ">
    <div class="card image"></div>
  </div>

</template>

<style scoped lang="scss">

@import "../../assets/Library";

.cardWrap{
  border-bottom: 2px solid transparent;
  transition: 1s;
  cursor: pointer;
}

.card{
  background-image: v-bind(imageUrl);
  height: 60px;
  width: 60px;
  margin-bottom: $padding;
}

.active,.cardWrap:hover{
  border-bottom: 2px solid black;
  transition: 1s;
}

</style>