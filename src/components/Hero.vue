<script setup>
import { useReveal } from "../composables/useReveal";

const { element: heroRef, isVisible } = useReveal();
</script>

<template>
<section
  id="home"
  ref="heroRef"
  :class="[
    'relative w-full flex flex-col gap-12 px-6 py-24 sm:px-12 transition-all duration-700 ease-out',
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
  ]"
>
  <!-- Fondo con gradiente animado -->
  <div class="absolute inset-0 -z-10 overflow-hidden">
    <div
      class="absolute inset-0 bg-gradient-to-tr from-magenta/80 via-purple/80 to-yellow/50 animate-gradient"
    ></div>
    <div
      class="absolute -inset-x-20 top-1/3 h-72 rounded-full bg-purple/60 blur-3xl"
    ></div>
  </div>

  <div class="mx-auto w-full max-w-7xl space-y-6">
    <span
      class="inline-flex max-w-max items-center gap-2 rounded-full bg-white/40 backdrop-blur-md px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-purple"
    >
      Freelancing Studio
    </span>

    <h1 class="text-4xl font-semibold leading-tight text-white sm:text-5xl">
      Diseño y desarrollo web minimalista para marcas que quieren brillar.
    </h1>

    <p class="max-w-3xl text-lg text-white">
      Soy Andrea, creadora de
      <span class="font-semibold text-yellow">Andy es Dev</span>. Transformo
      tus ideas en experiencias digitales limpias, rápidas y memorables con un
      enfoque humano y colaborativo.
    </p>

    <div class="flex flex-wrap items-center gap-4">
      <a
        href="mailto:hello@andreablass.com"
        class="rounded-full bg-magenta px-6 py-3 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-magenta/70 focus-visible:ring-offset-2"
        target="_blank"
        rel="noreferrer"
      >
        Contáctame
      </a>
      <span class="inline-flex max-w-max items-center gap-2 r-md px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white">
        Creando productos digitales y experiencias de marca.
      </span>
    </div>
  </div>
</section>

</template>
