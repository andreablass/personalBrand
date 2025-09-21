<script setup>
import { useReveal } from '../composables/useReveal';

const articles = [
  {
    title: 'Cómo diseñar un onboarding memorable sin fricción',
    url: 'https://medium.com/@andyesdev/onboarding-memorable',
  },
  {
    title: 'Guía práctica para planear un sitio minimalista con intención',
    url: 'https://medium.com/@andyesdev/sitio-minimalista',
  },
];

const { element: blogRef, isVisible } = useReveal();
</script>

<template>
  <section
    id="blog"
    ref="blogRef"
    :class="[
      'mx-auto max-w-5xl space-y-10 px-6 py-16 transition-all duration-700 ease-out sm:px-8',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    ]"
  >
    <div class="flex flex-col gap-4">
      <span class="text-sm font-semibold uppercase tracking-[0.3em] text-green">
        Blog
      </span>
      <h2 class="text-3xl font-semibold text-purple sm:text-4xl">
        Lecturas para inspirar tu próximo lanzamiento.
      </h2>
      <p class="max-w-2xl text-base text-[color:var(--color-ink-soft)]">
        Ideas, procesos y aprendizajes de proyectos reales para que tomes decisiones con claridad.
      </p>
    </div>
    <div class="grid gap-6 md:grid-cols-2">
      <article
        v-for="article in articles"
        :key="article.url"
        class="group flex flex-col gap-4 rounded-3xl border border-purple/25 bg-white/95 p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-purple/40"
      >
        <h3 class="text-xl font-semibold text-magenta">
          {{ article.title }}
        </h3>
        <a
          :href="article.url"
          class="inline-flex items-center gap-2 text-sm font-semibold text-purple transition group-hover:text-magenta"
          target="_blank"
          rel="noreferrer"
        >
          Leer artículo
          <span aria-hidden="true">↗</span>
        </a>
      </article>
    </div>
  </section>
</template>
