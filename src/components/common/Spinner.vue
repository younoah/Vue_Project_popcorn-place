<template>
  <div class="spinner">
    <div v-for="idx in 12" :key="spinnerKey + idx"></div>
  </div>
</template>

<style lang="scss" scoped>
.spinner {
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;

  div {
    transform-origin: 40px 40px;
    animation: spinner 1.2s linear infinite;

    &::after {
      position: absolute;
      top: 3px;
      left: 37px;
      display: block;
      width: 6px;
      height: 18px;
      background: colors.$brand-dark;
      border-radius: 20%;
      content: "";
    }
  }

  @for $i from 1 through 12 {
    div:nth-child(#{$i}) {
      transform: rotate(#{0 + ($i - 1) * 30}deg);
      animation-delay: #{-1.1 + ($i - 1) * 0.1}s;
    }
  }
}

@keyframes spinner {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { useUniqueKey } from "@/composables";

const COMPONENT_NAME = "spinner";

export default defineComponent({
  name: COMPONENT_NAME,
  setup() {
    const spinnerKey = useUniqueKey(COMPONENT_NAME);

    return { spinnerKey };
  },
});
</script>
