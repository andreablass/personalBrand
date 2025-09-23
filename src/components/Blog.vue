<script setup>
import { useReveal } from "../composables/useReveal";

const articles = [
  {
    title: "Estrategia que convierte",
    content:
      "No solo creo sitios atractivos, sino plataformas pensadas para captar atención, generar confianza y guiar al usuario hacia la acción que importa para tu negocio.",
  },
  {
    title: "Carga rápida, resultados tangibles",
    content:
      "Sitios optimizados para cargar en segundos, incluso en dispositivos móviles. Menos rebotes, más clientes. Cada segundo cuenta para tu crecimiento digital.",
  },
  {
    title: "Diseño a la medida de tu negocio",
    content:
      "Cada empresa es única, y tu sitio también debe serlo. Adaptación total a tu marca, objetivos y audiencia, creando una presencia digital auténtica y memorable.",
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
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
    ]"
  >
    <div class="flex flex-col items-center gap-4 text-center">
      <span class="text-sm font-semibold uppercase tracking-[0.3em] text-green">
        Acerca de mí
      </span>
      <h2 class="text-3xl font-semibold text-purple sm:text-4xl">
        Por qué trabajar conmigo
      </h2>
      <p class="max-w-2xl text-base text-[color:var(--color-ink-soft)]">
        Diseño y desarrollo sitios web efectivos que combinan estética visual,
        contenido estratégico e interacción intuitiva, para atraer visitantes y
        convertirlos en clientes reales.
      </p>
    </div>

    <div class="flex flex-col gap-6 md:flex-row md:gap-6">
      <article
        v-for="article in articles"
        :key="article.title"
        class="flex-1 group flex flex-col gap-4 rounded-3xl border border-purple/25 bg-white/95 p-6 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-purple/40"
      >
        <h3 class="text-xl font-semibold text-magenta">
          {{ article.title }}
        </h3>
        <p class="text-sm text-purple">
          {{ article.content }}
        </p>
      </article>
    </div>
  </section>
</template>
