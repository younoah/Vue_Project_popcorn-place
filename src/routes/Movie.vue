<template>
  <section>
    <div class="inner">
      <MovieItem
        v-for="movie in movies" 
        :key="movie.imdbID" 
        :movie="movie" />
      <Trigger @triggerIntersected="loadMore" />
    </div>
  </section>
</template>

<script>
import MovieItem from '~/components/MovieItem';
import Trigger from '~/components/Trigger';

export default {
  components: {
    MovieItem,
    Trigger
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies;
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