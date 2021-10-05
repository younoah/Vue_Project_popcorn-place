<template>
  <Seacrch />
  <div>
    <ul>
      <li
        v-for="movie in movieList"
        :key="movie.imdbID">
        <div>
          {{ movie.Title }} {{ movie.Type }} {{ movie.Year }}
        </div>
        <img :src="movie.Poster" />
      </li>
    </ul>
  </div>
</template>

<script>
import Seacrch from  '~/components/Seacrch'
export default {
  components:{
    Seacrch
  },
  data() {
    return {}
  },
  computed: {
    movieList() {
      return this.$store.state.searchApi.movieList
    },
  },
  created() {
    this.$store.dispatch('searchApi/getMovie')
  },
}
</script>
