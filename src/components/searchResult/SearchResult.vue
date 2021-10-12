<template>
  <main class="content">
    <h2 v-if="movies.length > 0" class="content__guidance">
      '{{ this.$store.state.keyword }}'의 검색결과
    </h2>
    <h2 v-else class="content__guidance">검색결과가 없습니다.</h2>
    <ul class="content__search-result">
      <MovieItem
        v-for="movie in movies"
        :key="movie.imdbID"
        :movie="movie"
        class="search-result__item"
      />
    </ul>
    <button class="content__button">더보기</button>
  </main>
</template>

<script>
import MovieItem from './MovieItem';

export default {
  components: {
    MovieItem,
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  &__guidance {
    display: flex;
    justify-content: center;
    margin: 24px 0;
    font-size: 24px;
    color: grey;
  }
  &__search-result {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 32px;
    grid-column-gap: 16px;
  }
  &__button {
    cursor: pointer;
  }
}

@media screen and (max-width: $breakpoint-xs - 1) {
  .content {
    &__search-result {
      grid-template-columns: repeat(1, 1fr);
    }

    &__guidance {
      padding-top: 6rem;
      font-size: $size-font-md;
    }
  }
}

@media screen and (min-width: $breakpoint-xs) and (max-width: $breakpoint-sm - 1) {
  .content {
    &__search-result {
      grid-template-columns: repeat(2, 1fr);
    }

    &__guidance {
      padding-top: 6rem;
      font-size: $size-font-lg;
    }
  }
}

@media screen and (min-width: $breakpoint-sm) and (max-width: $breakpoint-md - 1) {
  .content {
    &__search-result {
      grid-template-columns: repeat(2, 1fr);
    }

    &__guidance {
      font-size: $size-font-lg;
    }
  }
}

@media screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-xl - 1) {
  .content {
    &__search-result {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
