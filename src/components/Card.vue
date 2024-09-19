<script setup>
import { ref } from 'vue'

defineProps({
  title: String,
  description: String,
  to: String,
  bg: String,
})

</script>

<template>
  <div class="md:w-1/4 h-48 w-full bg-white rounded-xl border-2 border-black bg-cover cursor-pointer">
    <div id="div" class="h-full w-full backdrop-blur-sm p-2">
      <h1 class="text-[3rem] text-center text-white">{{ title }}</h1>
      <p class="text-lg text-white text-ellipsis">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
  #div {
    overflow: hidden;
  }

  #div::before {
    content: 'Tovább';
    border-radius: 0.75rem;
    font-size: 3rem;
    align-items: center;
    display: none;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000096;
    backdrop-filter: blur(10px);
    z-index: 1;
  }

  #div::after {
    content: 'asd';
    border-radius: 0.75rem;
    font-size: 3rem;
    align-items: center;
    display: none;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000096;
    backdrop-filter: blur(10px);
    z-index: 2;
  }

  #div:hover::before {
    animation: slide 1s forwards;
    display: flex;
  }

  @keyframes slide {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0%);
    }
  }
</style>
