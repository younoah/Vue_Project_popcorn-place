import { debounce } from "lodash";
import { customRef, ref } from "vue";

const useDebouncedRef = <T>(initialValue: T, delay: number) => {
  const state = ref(initialValue);
  const debouncedRef = customRef((track, trigger) => ({
    get() {
      track();
      return state.value;
    },
    set: debounce((value) => {
      state.value = value;
      trigger();
    }, delay),
  }));

  return debouncedRef;
};

export default useDebouncedRef;
