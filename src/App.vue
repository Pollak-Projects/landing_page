<script setup>
import { RouterView } from "vue-router";

</script>

<template>
  <main
    class="min-h-screen w-screen bg-[url('./assets/UjHatter.jpg')] bg-no-repeat bg-cover bg-center p-10 overflow-y-auto overflow-x-hidden"
  >
    <RouterView />
  
  </main>
  <footer
    class="bg-slate-800 text-slate-100 fixed bottom-0 w-screen flex items-center justify-center md:h-7 text-center"
  >
    Készítette: 12. évfolyam Szoftverfejlesztők © Copyright 2024-2025
  </footer>
  
</template>

<style scoped></style>
