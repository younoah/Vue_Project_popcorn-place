<template>
  <BaseLayout>
    <template v-slot:header>
      <ComboBox />
    </template>
    <template v-slot:main>
      <MovieDetailCard />
    </template>
  </BaseLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BaseLayout from "@/layout/BaseLayout.vue";
import ComboBox from "@/components/Home/ComboBox.vue";
import MovieDetailCard from "@/components/Home/MovieDetailCard.vue";

const COMPONENT_NAME = "Home";

export default defineComponent({
  name: COMPONENT_NAME,
  components: {
    BaseLayout,
    ComboBox,
    MovieDetailCard,
  },
});
</script>
