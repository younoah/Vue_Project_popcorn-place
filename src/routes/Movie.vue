<template>
  <section>
    <div class="inner">
      <NotFoundMovies
        v-if="$store.state.movie.notFoundMovies"
        :search-word="$store.state.movie.searchWord" />
      <MovieItem
        v-for="movie in movies" 
        :key="movie.imdbID" 
        :movie="movie" />
      <Trigger @triggerIntersected="loadMore" />
    </div>
  </section>
</template>

<script>
import NotFoundMovies from '~/components/NotFoundMovies';
import MovieItem from '~/components/MovieItem';
import Trigger from '~/components/Trigger';

export default {
  components: {
    NotFoundMovies,
    MovieItem,
    Trigger,
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies;
    },
    isLoading() {
      return this.$store.state.movie.isLoading;
    }
  },
  methods: {
    async loadMore() {
      this.$store.commit('movie/increasePage');
    } 
  }
};
</script>

<style lang="scss">
section {
  width: 100%;
}
.inner {
  background-color: ivory;
  display: flex;
  flex-wrap: wrap;
}
</style>