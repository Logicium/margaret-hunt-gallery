<script setup lang="ts">

import data from "../data/data.ts";
import InteractiveImageCard from "@/components/cards/InteractiveImageCard.vue";
import {computed} from "vue";
import ArrowIcon from "@/assets/icons/ArrowIcon.vue";
const allImageUrls = computed(() => data.artPieces.map(art => art.image)).value;

// Shuffles an array in place and returns it (or modify to return a new array)
function shuffleArray<T>(array: T[]): T[] {
  let currentIndex = array.length;
  let randomIndex;
  const newArray = [...array]; // Clone array to avoid modifying original if it's used elsewhere

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]];
  }
  return newArray;
}

// --- Generate Fixed Delays ---
const numberOfCards = 6;
const delayInterval = 0.5; // Set the time step between delays (in seconds)
const fixedDelays: string[] = [];
for (let i = 1; i <= numberOfCards; i++) {
  fixedDelays.push(`${(i * delayInterval).toFixed(2)}s`);
}

// --- Shuffle the Fixed Delays ---
const shuffledDelays = shuffleArray(fixedDelays);

// Prepare the first 6 art pieces, assigning a *shuffled* fixed delay to each
const displayedArtPieces = data.artPieces.slice(0, numberOfCards).map((art, index) => {
  return {
    ...art,
    animationDelay: shuffledDelays[index]
  };
});

</script>

<template>

  <div class="gridPanel">
    <InteractiveImageCard
        v-for="art in displayedArtPieces"
        :initial-image-url="art.image"
        :all-image-urls="allImageUrls"
        :animation-delay="art.animationDelay"
    />
    <div class="card">
      <div>
        <div class="header">MARGARET HUNT "RETROSPECTIVE"</div>
        <div class="small">Trinidad, Colorado</div>
        <div class="small">221 B Gallery | 221 Nona Ave</div>
        <div class="title">5-8pm, May 9th 2025</div>
      </div>
      <div class="desc"></div>
      <div class="buttons">
        <RouterLink to="/event"><div class="button ghost gap">Learn More</div></RouterLink>
        <RouterLink to="/gallery"><div class="button empty">Explore Gallery<ArrowIcon class="icon"/></div></RouterLink>
      </div>

    </div>

  </div>

</template>


<style scoped lang="scss">

@import "../assets/Library";

.buttons{
  display: flex;
}

.card{
  display: flex;
  grid-column: span 2;
  flex-direction: column;
  justify-content: space-between;
  white-space: break-spaces;
  animation: fadein 1s forwards;
  opacity: 0;
  animation-delay: 3.5s;
}

.gridPanel{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: 1.5fr 1.5fr 2fr;
  grid-gap: $padding;
  margin: $padding;
}

@media (max-width: 480px) {
  .gridPanel{
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: 1fr 1fr 1fr;
  }

  .gridPanel :nth-child(5),
  .gridPanel :nth-child(6) {
    display: none;
  }

}


</style>