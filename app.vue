<template>
  <div class="min-h-screen flex flex-col items-center justify-start py-10 px-4 bg-neutral-950 text-white">
    
    <!-- Logo -->
    <img src="@/assets/images/pdp.png" alt="Logo" class="w-48 h-48 rounded-full mb-6"/>

     <!-- Intro -->
    <h1 class="text-4xl font-bold text-center mb-3">
      <transition name="fade" mode="out-in">
        <span :key="isFrench">
          <span v-if="isFrench">Salut, moi c'est</span>
          <span v-else>Hello, I'm</span>
          <span class="text-emerald-600"> lordraghul</span> ✨
        </span>
      </transition>
    </h1>

    <transition name="fade" mode="out-in">
      <p class="text-center text-gray-300 max-w-xs mb-8 text-lg" :key="isFrench">
        <span v-if="isFrench">
          Data Engineer passionné par l’automatisation, la performance et la valorisation des données.
        </span>
        <span v-else>
          Data Engineer passionate about automation, performance, and turning data into value.
        </span>
      </p>
    </transition>

    <!-- Contact Links -->
    <div class="flex flex-col gap-5 w-full max-w-xs mb-8">
      
      <a
        href="https://github.com/lordraghul"
        target="_blank"
        class="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-700 text-white hover:bg-gray-400 transition text-lg"
      >
        <img src="@/assets/images/github.png" alt="GitHub" class="w-8 h-8"/>
        <span class="text-center flex-1 font-semibold">GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/lyes-a-a22009388/"
        target="_blank"
        class="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-700 text-white hover:bg-blue-600 transition text-lg"
      >
        <img src="@/assets/images/linkedin.png" alt="LinkedIn" class="w-8 h-8"/>
        <span class="text-center flex-1 font-semibold">LinkedIn</span>
      </a>

      <a
        href="https://www.kaggle.com/lordraghul"
        target="_blank"
        class="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-700 text-white hover:bg-amber-700 transition text-lg"
      >
        <img src="@/assets/images/kaggle.svg" alt="Kaggle" class="w-8 h-8"/>
        <span class="text-center flex-1 font-semibold">Kaggle</span>
      </a>

      <a
        href="https://medium.com/@lyeswtf"
        target="_blank"
        class="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-700 text-white hover:bg-gray-500 transition text-lg"
      >
        <img src="@/assets/images/medium.svg" alt="Blog" class="w-8 h-8"/>
        <span class="text-center flex-1 font-semibold">Blog</span>
      </a>

    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const isFrench = ref(true);
let interval: number;

onMounted(() => {
  interval = setInterval(() => {
    isFrench.value = !isFrench.value;
  }, 5000); // change toutes les 5s
});

onBeforeUnmount(() => {
  clearInterval(interval);
});
</script>


<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
