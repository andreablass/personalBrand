<script setup>
const internalLinks = [
];

const freelanceLink = {
  label: "Freelance",
  href: "https://andyesdev.andreablass.com",
};
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-pink/40"
  >
    <nav
      class="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 sm:px-8"
    >
      <a
        href="#home"
        class="text-lg font-semibold text-purple transition hover:text-magenta"
      >
        AndyesDev
      </a>
      <div class="flex flex-1 items-center justify-end gap-6">
        <ul
          class="hidden items-center gap-5 text-sm font-medium text-purple/80 transition-colors sm:flex sm:text-base"
        >
          <li v-for="link in internalLinks" :key="link.label">
            <a
              :href="link.href"
              class="hover:text-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple/60"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
        <a
          href="mailto:hello@andreablass.com"
          class="rounded-full bg-yellow px-4 py-2 text-sm font-semibold text-white shadow-soft transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange/70 focus-visible:ring-offset-2"
          target="_blank"
          rel="noreferrer"
        >
          Contáctame
        </a>
      </div>
    </nav>
    <div class="sm:hidden border-t border-pink/40 bg-white/95 px-6 pb-5">
      <ul class="flex flex-wrap gap-3 text-sm font-medium text-purple/80">
        <li v-for="link in internalLinks" :key="link.href">
          <a
            :href="link.href"
            class="rounded-full bg-purple/15 px-3 py-1 transition hover:bg-purple/25 hover:text-purple"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </div>
  </header>
</template>
