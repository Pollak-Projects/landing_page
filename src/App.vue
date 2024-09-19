<script setup>
import Card from './components/Card.vue'
</script>

<template>
  <main class="h-screen w-screen bg-gradient-to-bl from-[#5585b5] via-[#bbe4e9] p-10">
    <h1 class="text-[3rem] h-[150px] flex items-center justify-center">Landing Page</h1>
    <div class="h-[calc(100%-150px)] w-full gap-5 flex flex-col justify-center items-center md:flex-row md:flex-wrap">
      <Card title="Időpontfoglaló" description="Lorem Ipsum is simply dummy text of the printing and typesetting industry." to="" class="bg-[url(https://i0.wp.com/blog.ontheballpromotions.com/wp-content/uploads/2017/09/financial-planner-reference-calendar.jpg?fit=1200%2C800&ssl=1)]" />
      <Card title="Büfé" description="Pollák büfé" to="" class="bg-[url(https://pollakbufe.hu/public/Images/bufe.jpg)]" />
      <Card title="Büfé" description="Pollák büfé" to=""/>
      <Card title="Büfé" description="Pollák büfé" to="" />
      <Card title="Büfé" description="Pollák büfé" to="" />
      <Card title="Büfé" description="Pollák büfé" to="" />
    </div>
  </main>
</template>

<style scoped>
</style>
