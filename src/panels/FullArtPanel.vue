<script setup lang="ts">

import {computed, ref, watch} from "vue";
import CloseIcon from "@/assets/icons/CloseIcon.vue";

const props = defineProps({
  data: { type: Array },
  showFull:{type: Boolean},
  backClick:{type: Function}
});

const updatedData = ref(props.data[0]);
const imageUrl = ref( computed(()=> 'url("'+props.data[0].image+'")').value);

watch(()=> props.data,(newValue,oldValue)=>{
  if(newValue){
    updatedData.value = newValue[0];
    imageUrl.value = computed(()=> 'url("'+newValue[0].image+'")').value;
  }
});

</script>

<template>
  <div v-if="updatedData" class="panel" :class="showFull?'active':''">
      <div class="infoWrap gap">
        <div>
          <div class="header">{{updatedData.title.toUpperCase()}}</div>
          <div class="med top">Margaret Hunt, {{updatedData.date}}</div>
          <div class="small">{{updatedData.medium}}</div>
          <div class="small">68 x 160 inches</div>

        </div>
        <div class="desc">
          <div class="top">{{updatedData.desc}}</div>
          <div class="small top">Tags: {{updatedData.tags}}</div>
        </div>
        <div class="button empty" @click="backClick()">Close<CloseIcon/></div>
      </div>

      <div class="image imageWrap">

      </div>
  </div>
</template>

<style scoped lang="scss">

@import "../assets/Library";

.infoWrap{
  display: flex;
  flex-direction: column;
}

.desc{
  align-self: end;
  margin-top: auto;
}

.panel{
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  opacity: 0;
  visibility: hidden;
  transition: 1s;
  background-color: white;
  z-index: 1;
  padding: $padding;
}

.button{

}

.active{
  opacity: 1;
  transition: 1s;
  visibility: visible;
}

.imageWrap{
  background-image: v-bind(imageUrl);
}

</style>