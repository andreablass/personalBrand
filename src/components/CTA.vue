<script setup>
import { useReveal } from '../composables/useReveal';

const { element: ctaRef, isVisible } = useReveal();
</script>

<template>
  <section
    ref="ctaRef"
    :class="[
      'mx-auto max-w-4xl px-6 py-20 transition-all duration-700 ease-out sm:px-8',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    ]"
  >
    <div class="relative overflow-hidden rounded-3xl border border-purple/30 bg-purple/15 p-10 text-center shadow-soft">
      <div class="absolute -top-16 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-pink/40 blur-3xl"></div>
      <div class="relative space-y-4">
        <h2 class="text-3xl font-semibold text-purple sm:text-4xl">
          ¿Listas para crear algo brillante?
        </h2>
        <p class="mx-auto max-w-2xl text-base text-[color:var(--color-ink-soft)]">
          Escríbeme y conversemos sobre tu proyecto. Me encantará ayudarte a diseñar una presencia digital auténtica y enfocada en resultados.
        </p>
        <a
          href="mailto:hola@andreablass.com"
          class="inline-flex items-center justify-center gap-2 rounded-full bg-green px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/70 focus-visible:ring-offset-2"
        >
          Escribir a hola@andreablass.com
        </a>
      </div>
    </div>
  </section>
</template>
