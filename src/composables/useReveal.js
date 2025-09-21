import { onBeforeUnmount, onMounted, ref } from 'vue';

export function useReveal(options = { threshold: 0.15 }) {
  const element = ref(null);
  const isVisible = ref(false);
  let observer;

  onMounted(() => {
    if (!element.value) return;

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          if (observer) {
            observer.unobserve(entry.target);
          }
        }
      });
    }, options);

    observer.observe(element.value);
  });

  onBeforeUnmount(() => {
    if (observer && element.value) {
      observer.unobserve(element.value);
    }
  });

  return { element, isVisible };
}
