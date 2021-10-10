<template>
  <img
    class="image"
    :src="currentSrc"
    :alt="alt"
    @load="onLoad"
    @error="onError"
  />
</template>

<style lang="scss" scoped>
.image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import fallbackImg from "@/assets/logo.png";

const COMPONENT_NAME = "Image";

export default defineComponent({
  name: COMPONENT_NAME,
  props: {
    onLoad: { type: Function as PropType<() => void>, required: true },
    src: { type: String, required: true },
    alt: { type: String, required: true },
  },
  setup(props) {
    const currentSrc = ref<string>(props.src);

    const onError = () => {
      currentSrc.value = fallbackImg;
    };

    return { currentSrc, onError };
  },
});
</script>
