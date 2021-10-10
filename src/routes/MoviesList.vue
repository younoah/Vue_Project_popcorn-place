<template>
  <h2
    v-show="isInit"
    class="guide guide--suggest">
    추천 검색어 <span>" {{ initKeyword }} "</span> (으)로 찾은 결과입니다.
  </h2>
  <h2
    v-show="!isInit"
    class="guide guide--search">
    <span>" {{ keyword }} "</span> (으)로 찾은 결과입니다.
  </h2>
  <ul class="list-container">
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
    isInit() {
      return this.$store.state.movies.isInit
    },
    keyword() {
      return this.$store.state.movies.keyword
    },
    initKeyword() {
      return this.$store.getters['movies/initKeyword']
    },
    movies() {
      return this.$store.state.movies.movies
    }
  },
  created() {
    this.$store.dispatch('movies/searchMovies', this.initKeyword)
  }
}
</script>

<style lang="scss" scoped>
.list-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
}

.guide {
  padding: 30px 0;
  font-size: 20px;

  span {
    font-weight: bold;
    color: orange;
  }
}
</style>
