<script setup>
import Card from "../components/Card.vue";
import { ref } from "vue";

const counter = ref(3)

const IntervalRef = setInterval(()=>{
    counter.value--
}, 1000)

setTimeout(()=> {
  clearInterval(IntervalRef)
  counter.value = 3
}, 3000)

</script>
<template>
  <div>
    <RouterLink
      class="absolute top-3 right-6 bg-sky-300 w-24 h-8 rounded-2xl font-bold font-sans flex items-center justify-center"
      to="/login"
    >
      Login
    </RouterLink>
  </div>
  <img src="" alt="" />
  <h1
    class="text-[3rem] h-[150px] flex items-center justify-center text-white font-mono font-semibold text-7xl"
  ></h1>
  <div
    class="h-[calc(100%-150px)] w-full gap-5 flex flex-col justify-center items-center md:flex-row md:flex-wrap"
  >
    <Card
      title="Időpontfoglaló"
      to="https://foglalas.pollak.info/"
      class="bg-[url(https://i0.wp.com/blog.ontheballpromotions.com/wp-content/uploads/2017/09/financial-planner-reference-calendar.jpg?fit=1200%2C800&ssl=1)]"
    />
    <Card
      title="Büfé"
      to="https://pollakbufe.hu/"
      class="bg-[url(https://pollakbufe.hu/public/Images/bufe.jpg)]"
    />
    <Card
      title="Selfie automata"
      to=""
      class="bg-[url(https://www.selfieparty.hu/wp-content/uploads/selfiegep-eskuvore-1.jpg)]"
    />
    <Card
      title="PollákMix"
      to="https://pollakmix.hu/"
      class="bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKb6ZTMRUHc788L_9Kfzt7h6HiUV7X4-jPhQ&s)]"
    />
    {{ counter }}
  </div>
</template>
<style scoped></style>
