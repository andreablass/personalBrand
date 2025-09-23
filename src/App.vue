<script setup>
import Blog from './components/Blog.vue';
import CTA from './components/CTA.vue';
import Hero from './components/Hero.vue';
import NavBar from './components/NavBar.vue';
import Projects from './components/Projects.vue';
import Services from './components/Services.vue';
</script>

<template>
  <div class="min-h-screen bg-white">
    <NavBar />
    <main class="mx-auto flex w-full flex-col gap-4 pb-20">
      <Hero />
      <Services />
      <Projects />
      <Blog />
      <CTA />
    </main>
  </div>
</template>
