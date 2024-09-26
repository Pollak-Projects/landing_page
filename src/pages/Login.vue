<script setup></script>
<template>
  <div class="h-full w-full flex flex-col justify-center items-center">
    <div class="flex bg-slate-500 h-40 w-1/5 justify-center items-center rounded-2xl">
        <div class="flex flex-col gap-2 w-4/5">
          <h1 class="text-gray-50 font-semibold text-3xl">Bejelentkezés</h1>
          <input type="text" placeholder="E-mail" class="rounded-lg text-balance"/>
          <input type="password" placeholder="Jelszó" class="rounded-lg"/>
          <input type="submit" value="Bejelentkezés" class="bg-white w-1/3 justify-center items-center flex rounded-lg cursor-pointer">
      </div>
    </div>
  </div>
</template>
