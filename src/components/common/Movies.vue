<template>
  <section
    class="
      movies
      row
      row-cols-1
      row-cols-sm-2
      row-cols-md-3
      row-cols-lg-4
      align-items-stretch
    "
  >
    <h1 class="w-100 fw-bold">{{ searchedTitle }}</h1>
    <template
      v-for="movieItem in movieList"
      :key="movieItem.imdbID"
    >
      <Movie :movie-item="movieItem" />
    </template>
  </section>
  <teleport to="body">
    <div v-if="isLoading" class="movie__modal">
      <img
        class="modal__animation"
        src="loading.svg"
        alt="로딩 중..."
      />
      <h3 class="modal__content">로딩 중입니다!</h3>
    </div>
  </teleport>
</template>

<script>
import Movie from '@/components/common/Movie';
export default {
  components: {
    Movie,
  },
  data() {
    return {};
  },
  computed: {
    searchedTitle() {
      return this.$store.state.movie.searchedTitle
        ? `'${this.$store.state.movie.searchedTitle}' 검색 결과`
        : '';
    },
    isLoading() {
      return this.$store.state.movie.isLoading;
    },
    movieList() {
      console.log(this.$store.state.movie.movieList);
      return this.$store.state.movie.movieList;
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.movie__modal {
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  z-index: 9999 !important;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: rgba(#333, 0.8);
  .modal__animation {
    width: 200px;
  }
  .modal__content {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
  }
}
</style>
