import { ref, Ref, onMounted, onUnmounted } from "vue";

const useIntersectionObserver = (
  target: Ref<HTMLElement | null>,
  options: { root: HTMLElement | null; rootMargin: string }
) => {
  const intersectionRatio = ref<number>(0);
  const isIntersecting = ref<boolean>(false);

  let observer: InstanceType<typeof IntersectionObserver>;

  const observe = () => {
    if (!target.value) return;
    observer.observe(target.value);
  };

  onMounted(() => {
    observer = new IntersectionObserver(([entry]) => {
      intersectionRatio.value = entry.intersectionRatio;
      if (entry.intersectionRatio > 0) {
        isIntersecting.value = true;
        return;
      }

      isIntersecting.value = false;
    }, options);

    observe();
  });

  const unobserve = () => {
    if (!(observer && target.value)) return;
    observer.unobserve(target.value);
  };

  onUnmounted(unobserve);

  return {
    intersectionRatio,
    isIntersecting,
    observe,
    unobserve,
  };
};

export default useIntersectionObserver;
