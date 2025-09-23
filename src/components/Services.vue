<script setup>
import { useReveal } from '../composables/useReveal';

const services = [
  {
    title: 'Sitios web a medida',
    description:
      'Diseño y desarrollo de landing pages estratégicas que comunican tu propuesta de valor y convierten visitas en oportunidades reales.',
    items: [
      'Arquitectura de información clara y persuasiva',
      'Integraciones con herramientas de marketing y analítica',
      'Experiencias adaptables en cualquier dispositivo',
    ],
  },
  {
    title: 'Branding digital',
    description:
      'Creo sistemas visuales coherentes para que tu marca se reconozca en cada punto de contacto digital.',
    items: [
      'Paletas y tipografías expresivas para tu identidad',
      'Guías de estilo listas para compartir con tu equipo',
      'Componentes reutilizables para productos y campañas',
    ],
  },
  {
    title: 'Consultoría & mejoras',
    description:
      'Diagnóstico y optimización de productos existentes con foco en performance, accesibilidad y narrativa.',
    items: [
      'Auditoría de UX/UI con recomendaciones priorizadas',
      'Refinamiento de contenidos y storytelling de marca',
      'Plan de acción para lanzamientos o relanzamientos',
    ],
  },
];

const { element: servicesRef, isVisible } = useReveal();
</script>

<template>
  <section
    id="servicios"
    ref="servicesRef"
    :class="[
      'mx-auto max-w-5xl space-y-12 px-6 py-16 transition-all duration-700 ease-out sm:px-8',
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    ]"
  >
    <div class="flex flex-col gap-4">
      <span class="text-sm font-semibold uppercase tracking-[0.3em] text-green">
        Servicios
      </span>
      <h2 class="text-3xl font-semibold text-purple sm:text-4xl">
        Soluciones digitales para impulsar tu historia.
      </h2>
      <p class="max-w-3xl text-base text-[color:var(--color-ink-soft)]">
        Selecciona el servicio que mejor se ajusta a tu objetivo y diseñamos juntas un plan claro, transparente y acompañado paso a paso.
      </p>
    </div>
    <div class="grid gap-8 md:grid-cols-3">
      <article
        v-for="service in services"
        :key="service.title"
        class="group flex flex-col gap-6 rounded-3xl border border-purple/25 bg-white/95 p-8 shadow-soft transition-transform duration-500 hover:-translate-y-2 hover:border-purple/40"
      >
        <div>
          <h3 class="text-2xl font-semibold text-magenta">
            {{ service.title }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-[color:var(--color-ink-soft)]">
            {{ service.description }}
          </p>
        </div>
        <ul class="flex flex-1 flex-col gap-3 text-sm font-medium text-purple/80">
          <li
            v-for="item in service.items"
            :key="item"
            class="flex items-start gap-3 rounded-2xl bg-purple/10 px-4 py-3"
          >
            <span class="mt-1 h-2 w-2 rounded-full bg-green"></span>
            <span class="leading-relaxed">{{ item }}</span>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
