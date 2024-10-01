<script setup></script>
<template>
  <div class="h-full w-full flex flex-col justify-center items-center">
    <div class="flex bg-slate-500 h-60 md:w-1/5 w-full justify-center items-center rounded-2xl">
        <div class="flex flex-col gap-4 w-11/12">
          <h1 class="text-gray-50 font-semibold text-3xl">Bejelentkezés</h1>
          <input type="text" placeholder="E-mail" class="rounded-xl text-balance mt-4 text-center mb-2 h-8"/>
          <input type="password" placeholder="Jelszó" class="rounded-xl h-8 text-center"/>
          <input type="submit" value="Bejelentkezés" class="justify-center items-center flex rounded-xl cursor-pointer mt-1 ml-24 bg-gray-600 text-slate-200 font-semibold w-2/5 h-8">
      </div>
    </div>
  </div>
</template>
