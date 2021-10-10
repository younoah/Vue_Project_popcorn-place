<template>
  <p class="not-found-message">{{ message }}</p>
</template>

<style lang="scss" scoped>
.not-found-message {
  @include typography.font-style(14);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

const COMPONENT_NAME = "NotFoundMessage";

export default defineComponent({
  name: COMPONENT_NAME,
  props: {
    message: { type: String, required: true },
  },
});
</script>
