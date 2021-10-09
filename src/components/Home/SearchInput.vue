<template>
  <input
    aria-controls="movie-list"
    aria-haspopup="listbox"
    id="search-input"
    role="combobox"
    type="text"
    v-model="searchTerm"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>

<script lang="ts">
import { useMovieData, useDebounceRef } from "@/composables";
import { defineComponent, PropType, watch } from "vue";

const COMPONENT_NAME = "SearchInput";

export default defineComponent({
  name: COMPONENT_NAME,
  props: {
    onBlur: Function as PropType<() => void>,
    onFocus: Function as PropType<() => void>,
  },
  setup() {
    const searchTerm = useDebounceRef("", 800);

    const {
      search: { latestSearchTerm },
      fetchMovies,
      clearSearchData,
      setLatestSearchTerm,
    } = useMovieData();

    watch(searchTerm, (currentValue) => {
      if (currentValue.trim() === "") {
        clearSearchData();
        return;
      }
      if (searchTerm.value.length <= 2) return;
      if (latestSearchTerm.value.trim() !== currentValue.trim()) {
        clearSearchData();
      }
      setLatestSearchTerm(currentValue);
      fetchMovies(currentValue);
    });

    return { searchTerm };
  },
});
</script>
<style lang="scss" scoped>
input {
  @include typography.font-style(20, white);

  width: 100%;
  height: 4.8rem;
  padding: 2%;
  vertical-align: middle;
  background: transparent;
  border: 0.2rem solid colors.$brand-light;
  border-radius: 0.6rem;
  box-shadow: 0 0 0 0 transparent;
  transition: all 300ms ease-in-out;

  &:focus {
    color: colors.$brand-dark;
    background: white;
    outline: none;
    box-shadow: 1px 1px 2px 2px colors.$brand-light;
  }
}
</style>
