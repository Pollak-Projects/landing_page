<script setup>
import { ref } from "vue";

const props = defineProps({
  title: String,
  to: String,
  bg: String,
});
function nav(){
  window.location.href = props.to
}
</script>

<template>
  <div
    class="lg:min-w-96 lg:w-1/4 h-48 w-full bg-white rounded-xl border-2 border-black bg-cover cursor-pointer"
    @click = "nav()"
  >
    <div id="div" class="h-full w-full backdrop-blur-sm p-2 rounded-xl">
      <h1 class="text-[2rem] text-center text-white md:text-[3rem]">
        {{ title }}
      </h1>
      
    </div>
  </div>
</template>

<style scoped>
#div {
  overflow: hidden;
}

#div::before {
  content: "";
  background-image: url("../assets/right-arrow-svgrepo-com.svg");
  background-size: 180px 180px;
  background-repeat: no-repeat;
  background-position: center;
  color: rgb(226, 78, 78);
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
  background-color: #000000dc;
  backdrop-filter: blur(10px);
  z-index: 1;
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
