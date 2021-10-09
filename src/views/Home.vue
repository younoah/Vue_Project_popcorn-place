<template>
  <BaseLayout>
    <template v-slot:header> </template>
    <template v-slot:main> </template>
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseLayout from "@/layout/BaseLayout.vue";

const COMPONENT_NAME = "Home";

export default defineComponent({
  name: COMPONENT_NAME,
  components: {
    BaseLayout,
  },
});
</script>
