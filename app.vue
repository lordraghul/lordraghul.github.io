<template>
  <div class="min-h-screen flex flex-col items-center justify-start py-10 px-4 bg-neutral-950 text-white">
    
    <!-- Logo -->
    <img src="@/assets/images/pdp.png" alt="Logo" class="w-48 h-48 rounded-full mb-6"/>

    <!-- Intro -->
    <h1 class="text-4xl font-bold text-center mb-3">Salut, moi c'est <span class="text-emerald-600">lordraghul</span> ✨</h1>
    <p class="text-center text-gray-300 max-w-xs mb-8 text-lg">
Data Engineer passionné par l’automatisation, la performance et la valorisation des données.
    </p>

    <!-- Contact Links -->
    <div class="flex flex-col gap-5 w-full max-w-xs mb-8">
      
      <a
        href="https://github.com/votre-nom"
        target="_blank"
        class="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-700 text-white hover:bg-gray-400 transition text-lg"
      >
        <img src="@/assets/images/github.png" alt="GitHub" class="w-8 h-8"/>
        <span class="text-center flex-1 font-semibold">GitHub</span>
      </a>

      <a
        href="https://www.linkedin.com/in/votre-nom"
        target="_blank"
        class="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-700 text-white hover:bg-blue-600 transition text-lg"
      >
        <img src="@/assets/images/linkedin.png" alt="LinkedIn" class="w-8 h-8"/>
        <span class="text-center flex-1 font-semibold">LinkedIn</span>
      </a>

      <a
        href="https://www.kaggle.com/votre-nom"
        target="_blank"
        class="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-700 text-white hover:bg-amber-700 transition text-lg"
      >
        <img src="@/assets/images/kaggle.svg" alt="Kaggle" class="w-8 h-8"/>
        <span class="text-center flex-1 font-semibold">Kaggle</span>
      </a>

      <a
        href="https://votre-blog.com"
        target="_blank"
        class="flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gray-700 text-white hover:bg-emerald-700 transition text-lg"
      >
        <img src="@/assets/images/blog.png" alt="Blog" class="w-8 h-8"/>
        <span class="text-center flex-1 font-semibold">Blog</span>
      </a>

    </div>
  </div>
</template>

<script setup lang="ts">
// Plus besoin de toggleTheme ni de theme variable
</script>

<style scoped>
body, html {
  scroll-behavior: smooth;
}
</style>
