<template>
  <ul
    role="listbox"
    id="movie-search-list"
    class="movie-search-list"
    ref="root"
    v-show="focused && !isSearchEmpty"
    aria-labelledby="combo-box__label"
  >
    <MovieSearchListItem
      v-for="(movie, idx) in movies"
      :key="movieListItemKey + idx"
      :poster="movie.Poster"
      :alt="movie.Title"
      :title="movie.Title"
      :year="movie.Year"
      :imdbID="movie.imdbID"
    />
    <div v-show="hasMore" ref="target">
      <ScrollDown />
    </div>
    <NotFoundMessage
      v-show="isSearchNotFound"
      :message="'검색어와 일치하는 결과가 없습니다.'"
    />
  </ul>
</template>
<style lang="scss" scoped>
.movie-search-list {
  position: absolute;
  top: calc(100% + 2rem);
  z-index: 1;
  width: 100%;
  max-width: 100%;
  max-height: 30rem;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  list-style: none;
  background-color: colors.$bg-color;
  border: 0.2rem solid colors.$brand-light;
  border-radius: 0.6rem;
  animation-name: display-results;
  animation-duration: 300ms;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
</style>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from "vue";
import { MovieSearchData } from "@/types/movie";
import MovieSearchListItem, {
  COMPONENT_NAME as MovieSearchListItemComponentName,
} from "@/components/Home/MovieSearchListItem.vue";
import ScrollDown from "@/components/common/ScrollDown.vue";
import NotFoundMessage from "@/components/common/NotFoundMessage.vue";
import {
  useIntersectionObserver,
  useMovieData,
  useUniqueKey,
} from "@/composables";

const COMPONENT_NAME = "MovieList";

export default defineComponent({
  name: COMPONENT_NAME,
  props: {
    movies: { type: Array as PropType<MovieSearchData[]>, required: true },
    focused: { type: Boolean, required: true },
  },
  setup() {
    const target = ref<HTMLElement | null>(null);
    const root = ref<HTMLElement | null>(null);

    const { isIntersecting } = useIntersectionObserver(target, {
      root: root.value,
      rootMargin: "0px",
    });

    const movieListItemKey = useUniqueKey(MovieSearchListItemComponentName);

    const {
      fetchNextPageMovies,
      search: { hasMore, isSearchEmpty, isSearchNotFound },
    } = useMovieData();

    watch(isIntersecting, (currentValue) => {
      if (!currentValue) return;
      fetchNextPageMovies();
    });

    return {
      target,
      root,
      hasMore,
      isSearchEmpty,
      isSearchNotFound,
      movieListItemKey,
    };
  },
  components: {
    MovieSearchListItem,
    ScrollDown,
    NotFoundMessage,
  },
});
</script>
