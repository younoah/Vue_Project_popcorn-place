<template>
  <div class="status">
    <PageStatus class="status__page" />
    <div class="status__found">
      found <span style="font-size: 40px;color:#e5e503"> {{ movieList.totalResults }}</span> movies
    </div>
  </div>
  <ul class="movie-items">
    <MovieItem
      v-for="movie in movieList.Search"
      :key="movie.imdbID"
      :movie="movie" />
  </ul>
</template>
<script>
import MovieItem from '~/components/MovieItem'
import PageStatus from '~/components/PageStatus'
export default {
  components: {
    PageStatus,
    MovieItem
  },

  computed:{
    movieList(){
      return this.$store.state.movie.movieList
    }
  }
}
</script>
<style lang="scss" scoped>
.movie-items{
  display: grid;
  position: relative;
  grid-template-columns: repeat(4,1fr);

}
.status{
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
  justify-content: space-between;
  position: relative;
  &__page{
    font-size: 30px;
  }
  &__found{
    font-size: 30px;
  }
}
</style>