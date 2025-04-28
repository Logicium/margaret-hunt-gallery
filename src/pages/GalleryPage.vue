<script setup lang="ts">
import data from "@/data/data.ts";
import GalleryCardBig from "@/components/cards/GalleryCardBig.vue";
import GalleryCardSmall from "@/components/cards/GalleryCardSmall.vue";
import {ref, onMounted, onBeforeUnmount, nextTick, type Ref, computed} from "vue";
import GalleryInfoCard from "@/components/cards/GalleryInfoCard.vue";
import FullArtPanel from "@/panels/FullArtPanel.vue";
import type {ReactiveArtPiece} from "@/data/interface.ts"; // Added necessary imports


const artPieces = ref<ReactiveArtPiece[]>(data.artPieces.map(art => {
  return {
    ...art,
    id: art.id || `generated-${Math.random()}`,
    isActive: ref(false)
  };
}));

const activeArt = computed(() => {
  return artPieces.value.filter(art => art.isActive === true);
});

const showFullArt = ref(false);
const showFullArtClick = function (){
  showFullArt.value = !showFullArt.value;
  console.log(showFullArt.value)
}

const scrollContainerRef = ref<HTMLDivElement | null>(null);
const artCardElementRefs = ref<Map<string | number, HTMLElement>>(new Map());
const setArtCardRef = (el: Element | object | null, id: string | number) => {
  const element = el && '$el' in el ? (el.$el as HTMLElement) : (el as HTMLElement | null);

  if (element) {
    artCardElementRefs.value.set(id, element);
  } else {
    artCardElementRefs.value.delete(id);
  }
};

let observer: IntersectionObserver | null = null;

const scrollToArt = (id: string | number) => {
  console.log(`Scroll to art ID: ${id} requested.`);
  const targetElement = artCardElementRefs.value.get(id);
  const container = scrollContainerRef.value;

  if (targetElement && container) {
    targetElement.scrollIntoView({
      behavior: 'smooth', // Use smooth scrolling animation
      inline: 'center',   // Horizontally align the element's center with the container's center
      block: 'nearest'   // Vertically align to the nearest edge (less critical for horizontal scroll)
    });
    console.log(`Scrolling to element for ID: ${id}`);
  } else {
    console.warn(`Element or container not found for scrolling to art ID: ${id}`);
  }
};

onMounted(async () => {
  await nextTick();

  const rootContainer = scrollContainerRef.value;

  const options = {
    root: rootContainer,
    rootMargin: "0px",
    threshold: 0.80,
  };

  observer = new IntersectionObserver((entries) => {
    let currentlyVisibleEntry: IntersectionObserverEntry | null = null;

    for (const entry of entries) {
      if (entry.isIntersecting) {
        currentlyVisibleEntry = entry;
        break;
      }
    }

    let visibleId: string | number | null = null;
    if (currentlyVisibleEntry) {
      artCardElementRefs.value.forEach((element, id) => {
        if (element === currentlyVisibleEntry?.target) {
          visibleId = id;
        }
      });
    }

    artPieces.value.forEach(art => {
      art.isActive = (art.id === visibleId);
    });

  }, options);

  artCardElementRefs.value.forEach(element => {
    observer?.observe(element);
  });
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
  artCardElementRefs.value.clear();
});

</script>

<template>

    <div class="galleryGrid">
      <FullArtPanel v-if="activeArt.length>0" :data="activeArt" :show-full="showFullArt" :back-click="showFullArtClick"/>
      <div class="gridWrap" ref="scrollContainerRef">
        <div class="imageGrid">
          <GalleryCardBig
              v-for="art in artPieces"
              :key="art.id"
              :data="art"
              :ref="(el:any) => setArtCardRef(el, art.id)"
          />
        </div>
      </div>

      <div class="galleryInfo">
        <GalleryInfoCard v-for="art in activeArt" :data="art" :show-full-click="showFullArtClick"/>
        <div class="galleryControls">
          <GalleryCardSmall
              v-for="art in artPieces"
              :key="art.id"
              :data="art"
              :is-active="art.isActive"
              @click="scrollToArt(art.id)"
          />
        </div>
      </div>

    </div>


</template>

<style scoped lang="scss">
@import "../assets/Library";


.galleryGrid{
  display: grid;
  grid-gap: $padding;
  grid-template-rows: 3fr 2fr;
  position: relative;
}

.gridWrap{
  position: relative;
  overflow: hidden;
  overflow-x: scroll;
}

.gridWrap::-webkit-scrollbar {
  display: none;
}

.imageGrid{
  height: 100%;
  width: 100%;
  display: flex;
}

.galleryInfo{
  display: grid;
  padding: $padding;
  grid-template-rows: 1fr auto;
}

.galleryControls{
  display: flex;
  margin-top: auto;
  padding-top: $padding;
}

</style>