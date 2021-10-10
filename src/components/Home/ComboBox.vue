<template>
  <div class="combo-box">
    <h1>영화 검색 🔎</h1>
    <label class="combo-box__label" for="search-input" id="combo-box__label">
      찾으려는 영화를 검색해보세요.
      <span v-if="searchCount">
        {{ searchCount.currentCount }} 개 / 총 {{ searchCount.totalCount }} 개
      </span>
    </label>
    <div class="combo-box__contents">
      <div class="combo-box__controls">
        <Spinner v-show="loading" />
        <SearchInput :onBlur="onBlur" :onFocus="onFocus" />
      </div>
      <MovieSearchList :movies="data.value" :focused="focused" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.combo-box {
  width: 72rem;

  h1 {
    @include typography.font-style(24, colors.$brand-light);
  }

  &__label {
    @include typography.font-style(16);

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 1.5rem;
  }

  &__contents {
    position: relative;
    width: 100%;
  }

  &__controls {
    display: flex;

    :deep(.spinner) {
      position: absolute;
      top: -1.6rem;
      right: -1.6rem;
      transform: scale(0.3);
    }
  }
}
</style>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import MovieSearchList from "@/components/Home/MovieSearchList.vue";
import SearchInput from "@/components/Home/SearchInput.vue";
import Spinner from "@/components/common/Spinner.vue";

import { useMovieData } from "@/composables";

type SearchInputStatus = {
  type: "blur" | "focus";
};

const COMPONENT_NAME = "ComboBox";

export default defineComponent({
  name: COMPONENT_NAME,
  setup() {
    const searchInputStatus = reactive<SearchInputStatus>({ type: "blur" });

    const {
      search: { loading, data, searchCount },
    } = useMovieData();

    const focused = computed(() => searchInputStatus.type === "focus");

    const onBlur = () => {
      searchInputStatus.type = "blur";
    };

    const onFocus = () => {
      searchInputStatus.type = "focus";
    };

    return { loading, data, onFocus, onBlur, focused, searchCount };
  },
  components: {
    MovieSearchList,
    SearchInput,
    Spinner,
  },
});
</script>
