<script setup lang="ts">

import data from "../data/data.ts";
</script>

<template>

    <div class="panel">
      <div class="rowSpace"/>
      <div class="infoWrap">
        <div class="header top">{{data.event.artist.toUpperCase()}}</div>
        <div class="header top">{{data.event.name.toUpperCase()}}</div>
        <div>{{data.event.location}}</div>
        <div class="top">{{data.event.address}}</div>
        <div class="title">{{data.event.time}}</div>
      </div>
      <div class="imageWrap">
        <div class="image"></div>
      </div>
    </div>
    <div class="infoPanel">
      <div class="infoArea">
        <div class="bold top">{{data.event.aboutMed}}</div>
        <div class="top">{{data.event.aboutFull}}</div>
        <div class="title"><span class="italic bold">"{{data.artist.quote}}"</span> - Margaret Hunt</div>
      </div>
    </div>
    <div class="artistPanel">
      <div class="imageWrapRev">
        <div class="image image2"></div>
      </div>
      <div class="infoWrapRev">
        <div class="bold top">About Artist</div>
        <div>{{data.artist.aboutFull}}</div>
      </div>
    </div>

</template>

<style scoped lang="scss">

@import "../assets/Library";
.panel{
  display: grid;
  grid-template-columns: repeat(10,1fr);
  grid-template-rows: repeat(10,1fr);
  height: calc(100vh - 100px);
  background-color: white;
}

.artistPanel{
  display: grid;
  grid-template-columns: repeat(10,1fr);
  grid-template-rows: repeat(10,1fr);
  height: calc(100vh - 100px);
  background-color: white;
  border-top: 2px solid #f2f2f2;
};

.infoPanel{
  padding: $padding;
  padding-top: $paddingXl;
  padding-bottom: $paddingXl;
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-template-rows: 1fr;
  min-height: calc(100vh - 100px);
  background-color: white;
  border-top: 2px solid #f2f2f2;
}

.infoArea{
  grid-column: 2/5;
  white-space: break-spaces;
  align-self: center;
}

.rowSpace{
  grid-column: span;
}

.infoWrap,.infoWrapRev{
  grid-column: 2/6;
  grid-row: 2/10;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.infoWrapRev{
  grid-column: 6/10;
  justify-self: end;
  padding-left: $paddingXl;
}

.imageWrap,.imageWrapRev{
  margin-left: $paddingLg;
  display: flex;
  align-items: center;
  grid-column: 6/10;
  grid-row: 2/10;
}
.imageWrapRev{
  grid-column: 2/6;
  margin-right: $paddingLg;
  margin-left: 0;
  justify-content:start;
}

.image{
  background-image: url("/images/art/feminism.heic");
  aspect-ratio: 9/16;
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  margin-left: auto;
}
.image2{
  background-image: url("/images/artist/hunt1.webp");
  max-width: 100%;
  background-position: 20% 100%;
  margin: 0;
}

@media (max-width: 480px){
  .infoWrap,.infoWrapRev{
    grid-column: 2/10;
    grid-row: 6/10;
  }
  .imageWrap,.imageWrapRev{
    margin: 0;
    grid-column: 3/9;
    grid-row: 2/6;
    display: flex;
    justify-content: center;
  }
  .infoWrapRev{
    padding-top: $paddingXl;
    padding-bottom: $paddingXl;
    padding-left: 0;
  }
  .image{
    margin: 0;
  }
  .infoPanel{
    grid-template-columns: repeat(10,1fr);
  }
  .infoArea{
    grid-column: 2/10;
  }
  .artistPanel{
    grid-template-rows: auto auto;
    padding-top: $paddingXl;
  }

  .panel{
    grid-template-rows: auto auto;
  }

}
@media (max-width: 481px) and (max-width: 768px){

}

</style>