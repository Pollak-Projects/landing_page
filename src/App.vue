<script setup>
import Card from "./components/Card.vue";
</script>

<template>
  <main
    class="min-h-screen w-screen bg-[url('./assets/fullhatter.jpg')] bg-no-repeat bg-cover p-10 overflow-y-auto overflow-x-hidden"
  >
    <h1 class="text-[3rem] h-[150px] flex items-center justify-center">
      Landing Page
    </h1>
    <div
      class="h-[calc(100%-150px)] w-full gap-5 flex flex-col justify-center items-center md:flex-row md:flex-wrap"
    >
      <Card
        title="Időpontfoglaló"
        description=""
        to=""
        class="bg-[url(https://i0.wp.com/blog.ontheballpromotions.com/wp-content/uploads/2017/09/financial-planner-reference-calendar.jpg?fit=1200%2C800&ssl=1)]"
      />
      <Card
        title="Büfé"
        description=""
        to=""
        class="bg-[url(https://pollakbufe.hu/public/Images/bufe.jpg)]"
      />
      <Card
        title="Selfie automata"
        description=""
        to=""
        class="bg-[url(https://www.selfieparty.hu/wp-content/uploads/selfiegep-eskuvore-1.jpg)]"
      />
      <Card
        title="PollákMix"
        description=""
        to=""
        class="bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKb6ZTMRUHc788L_9Kfzt7h6HiUV7X4-jPhQ&s)]"
      />
      <!-- <Card title="" description="" to="" />
      <Card title="Büfé" description="" to="" /> -->
    </div>
  </main>
</template>

<style scoped></style>
