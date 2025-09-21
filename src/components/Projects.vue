<script setup>
import { useReveal } from '../composables/useReveal';

const projects = [
  {
    title: 'Bloomy',
    description:
      'E-commerce para una floristería boutique con énfasis en fotografía y checkouts fluidos.',
    technologies: [
      { label: 'Vue 3', color: '#9fa6ee' },
      { label: 'TailwindCSS', color: '#ffafe4' },
      { label: 'Stripe', color: '#ff89ba' },
    ],
    link: {
      label: 'Ver demo',
      url: 'https://example.com/bloomy',
    },
  },
  {
    title: 'Nébula Podcast',
    description:
      'Sitio editorial y reproductor de audio con espacios amplios para storytelling y comunidad.',
    technologies: [
      { label: 'Nuxt', color: '#4c6d57' },
      { label: 'CMS Headless', color: '#ffd367' },
      { label: 'Motion Design', color: '#ff793f' },
    ],
    link: {
      label: 'Repositorio',
      url: 'https://github.com/andyesdev/nebula-podcast',
    },
  },
  {
    title: 'Marea Studio',
    description:
      'Portafolio creativo para un estudio de interiorismo con navegación narrativa y microinteracciones.',
    technologies: [
      { label: 'Vite', color: '#ff89ba' },
      { label: 'GSAP', color: '#ffafe4' },
      { label: 'Netlify', color: '#9fa6ee' },
    ],
    link: {
      label: 'Ver caso de estudio',
      url: 'https://example.com/marea',
    },
  },
];

const { element: projectsRef, isVisible } = useReveal();
</script>

<template>
  <section
    id="proyectos"
    ref="projectsRef"
    :class="[
      'mx-auto max-w-5xl space-y-12 px-6 py-16 transition-all duration-700 ease-out sm:px-8',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    ]"
  >
    <div class="flex flex-col gap-4">
      <span class="text-sm font-semibold uppercase tracking-[0.3em] text-green">
        Proyectos
      </span>
      <h2 class="text-3xl font-semibold text-purple sm:text-4xl">
        Experiencias digitales llenas de intención.
      </h2>
      <p class="max-w-3xl text-base text-[color:var(--color-ink-soft)]">
        Cada proyecto es una colaboración cercana con marcas que buscan simplicidad, impacto visual y una narrativa clara.
      </p>
    </div>
    <div class="grid gap-8 md:grid-cols-3">
      <article
        v-for="project in projects"
        :key="project.title"
        class="group flex h-full flex-col gap-6 rounded-3xl border border-purple/25 bg-white/95 p-8 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-purple/40 hover:shadow-[0_32px_80px_-40px_rgba(255,137,186,0.45)]"
      >
        <header class="space-y-3">
          <h3 class="text-2xl font-semibold text-magenta">
            {{ project.title }}
          </h3>
          <p class="text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
            {{ project.description }}
          </p>
        </header>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="tech in project.technologies"
            :key="tech.label"
            class="rounded-full px-3 py-1 text-xs font-semibold text-white"
            :style="{ backgroundColor: tech.color }"
          >
            {{ tech.label }}
          </span>
        </div>
        <div class="mt-auto">
          <a
            :href="project.link.url"
            class="inline-flex items-center gap-2 text-sm font-semibold text-purple transition hover:text-magenta"
            target="_blank"
            rel="noreferrer"
          >
            {{ project.link.label }}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </article>
    </div>
  </section>
</template>
