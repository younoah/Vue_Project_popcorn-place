<template>
  <ul>
    <MoviesItem
      v-for="movie in movies"
      :key="movie.imdbID"
      :movie="movie" />
  </ul>
</template>

<script>
import MoviesItem from '~/components/MoviesItem'

export default {
  components: {
    MoviesItem
  },
  computed: {
    movies() {
      return this.$store.state.movies.movies
    }
  },
  created() {
    this.$store.dispatch('movies/searchMovies')
  }
}
</script>

<style lang="scss" scoped>
ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
</style>
