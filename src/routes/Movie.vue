<template>
  <section>
    <div class="inner">
      <MovieItem
        v-for="movie in movies" 
        :key="movie.imdbID" 
        :movie="movie" />
    </div>
  </section>
</template>

<script>
import MovieItem from '~/components/MovieItem';

export default {
  components: {
    MovieItem
  },
  computed: {
    movies() {
      console.log(this.$store.state.movie.movies);
      return this.$store.state.movie.movies;
    }
  },
  methods: {
  }
};
</script>