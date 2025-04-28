<script setup lang="ts">

import {computed, ref} from "vue";

const props = defineProps<{
  initialImageUrl: string;
  allImageUrls: string[];
  animationDelay: string;
}>();
const imageUrl = computed(()=> 'url("'+props.initialImageUrl+'")').value;
const currentBackgroundImage = ref(imageUrl);

// State variables
const currentImageUrl = ref(imageUrl); // The image currently visible (or fading out)
const nextImageUrl = ref(imageUrl);    // The image that will fade in on hover
const nextImageKey = ref(0);                    // Tracks hover state for CSS class

// --- Event Handlers ---
function handleMouseEnter() {
  const currentUrlRaw = currentImageUrl.value.slice(5, -2);
  const availableImages = props.allImageUrls.filter(url => url !== currentUrlRaw);
  let pool = availableImages.length > 0 ? availableImages : props.allImageUrls;

  if (pool.length > 0) {
    const randomIndex = Math.floor(Math.random() * pool.length);
    // Set the image URL for the *next* layer
    nextImageUrl.value = `url("${pool[randomIndex]}")`;
    // Increment the key - this triggers v-if/transition
    nextImageKey.value++;
  }
}

function handleMouseLeave() {
  // Update the 'current' (base) layer image to match the one that just faded in.
  // This ensures the correct image is shown underneath next time.
  // We use nextImageUrl because its value persists even after mouse leave.

  setTimeout(()=>{
    currentImageUrl.value = nextImageUrl.value;
    nextImageUrl.value = "";
    nextImageKey.value = 0;
  },500)
}

function changeImage() {
  const currentUrlRaw = currentBackgroundImage.value.slice(5, -2);
  console.log(currentUrlRaw);

  // Find images that are *not* the currently displayed one
  const availableImages = props.allImageUrls.filter(image => image !== currentUrlRaw);

  let imagePool = availableImages;

  if (imagePool.length === 0 && props.allImageUrls.length > 0) {
    imagePool = props.allImageUrls;
  }

  // Only proceed if there's at least one image in the pool
  if (imagePool.length > 0) {
    // Select a random index from the available pool
    const randomIndex = Math.floor(Math.random() * imagePool.length);
    const newImageUrl = imagePool[randomIndex];

    // Update the reactive variable, which will update the style binding
    currentBackgroundImage.value = `url("${newImageUrl}")`;
  }
}

</script>

<template>
  <div class="imageContainer">
    <div class="image current"></div>
    <transition name="cross-fade">
      <div
          class="image next"
          v-if="nextImageKey > 0"
          :key="nextImageKey"
      ></div>
    </transition>
  </div>
</template>

<style scoped lang="scss">

@import "../../assets/Library";

.imageContainer {
  position: relative; // Establishes positioning context for children
  overflow: hidden; // Clips the absolutely positioned children
  opacity: 0;
  animation: fadein 1s linear forwards;
  animation-delay: v-bind(animationDelay);
}
.image { // Common styles
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}

.current {
  background-image: v-bind(currentImageUrl);
  z-index: 1;
}

.next {
  // This layer's background is set by v-bind()
  background-image: v-bind(nextImageUrl);
  // Base opacity when element exists (controlled by transition)
  opacity: 1; // Start fully visible *when rendered*
  z-index: 2;
}


.cross-fade-enter-active {
  transition: opacity 0.5s ease-in-out; // Duration matches desired fade time
}

// Applied for one frame at the start of enter
.cross-fade-enter-from {
  opacity: 0; // Start transparent
}

</style>