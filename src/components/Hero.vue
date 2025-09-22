<script setup>
import { useReveal } from '../composables/useReveal';

const { element: heroRef, isVisible } = useReveal();
</script>

<template>
  <section
    id="home"
    ref="heroRef"
    :class="[
      'relative mx-auto flex max-w-5xl flex-col gap-12 px-6 py-20 transition-all duration-700 ease-out sm:px-8 sm:py-24',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    ]"
  >
    <div class="absolute inset-x-10 -top-10 -z-10 h-60 rounded-full bg-purple/50 blur-3xl"></div>
    <span class="inline-flex max-w-max items-center gap-2 rounded-full bg-pink/ px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple">
      Freelancing Studio
    </span>
    <div class="space-y-6">
      <h1 class="text-4xl font-semibold leading-tight text-purple sm:text-5xl">
        Diseño y desarrollo web minimalista para marcas que quieren brillar.
      </h1>
      <p class="max-w-2xl text-lg text-[color:var(--color-ink-soft)]">
        Soy Andrea, creadora de <span class="font-semibold text-magenta">AndyesDev</span>. Transformo tus ideas en experiencias digitales limpias, rápidas y memorables con un enfoque humano y colaborativo.
      </p>
      <div class="flex flex-wrap items-center gap-4">
        <a
          href="https://andyesdev.andreablass.com"
          class="rounded-full bg-magenta px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta/70 focus-visible:ring-offset-2"
          target="_blank"
          rel="noreferrer"
        >
          Contáctame
        </a>
        <span class="text-sm font-medium text-green">
          Creando productos digitales y experiencias de marca.
        </span>
      </div>
    </div>
  </section>
</template>
