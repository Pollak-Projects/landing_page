<script setup>
import { defineModel, ref } from "vue";
import { useRouter } from "vue-router";
import { getCookie, parseJwt } from "../common/common";

const form = defineModel({
  default: {
    username: "",
    password: "",
  },
});

const error = ref("");

const router = useRouter();

function login() {
  console.log(form.username, form.password);
  fetch("https://auth.pollak.info/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      username: form.username,
      password: form.password,
    },
  }).then((res) => {
    const cookie = getCookie("access_token");

    if (cookie) {
      router.push("/");
    } else {
      error.value = "Hibás felhasználónév vagy jelszó!";
    }
  });
}
</script>
<template>
  <div class="h-full w-full flex flex-col justify-center items-center">
    <div
      class="flex bg-slate-500 h-60 xl:w-1/5 lg:w-2/5 w-full justify-center items-center rounded-2xl"
    >
      <div class="flex flex-col gap-4 justify-center items-center w-11/12">
        <h1 class="text-gray-50 font-semibold text-3xl">Bejelentkezés</h1>
        <input
          type="text"
          placeholder="Felhasználónév"
          class="rounded-xl text-balance mt-4 text-center w-full mb-2 h-8"
          v-model="form.username"
        />
        <input
          type="password"
          placeholder="Jelszó"
          class="rounded-xl h-8 w-full text-center"
          v-model="form.password"
        />
        <input
          type="button"
          value="Bejelentkezés"
          class="justify-center items-center flex rounded-xl cursor-pointer mt-1 bg-gray-600 text-slate-200 font-semibold w-2/5 h-8"
          @click="login"
        />
        <p class="text-red-500" :class="{ hidden: !error }">{{ error }}</p>
      </div>
    </div>
  </div>
</template>
