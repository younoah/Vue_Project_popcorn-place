<template>
  <h1>
    movie 
  </h1>
  <div> 검색결과: {{ totalresult }}</div>
  <ul class="movie-result">
    <li
      v-for="i in movieInfo"
      :key="i">
      <img
        class="movie-result-poster"
        :src="`${i.Poster}`" /> 
      {{ i.Title }}
    </li>
  </ul>
</template>

<script>

export default {

    data(){
        return {

        }
    },
computed:{
    movieInfo(){
        const info=this.$store.state.movie.movieInfo
    return info
    },
    Moviesinfo(){
        return this.$store.getters['movie/movieInformation']
    },
    totalresult(){
        console.log(this.$store.state.movie.totalresult)
    return this.$store.state.movie.totalresult

},
    

}
}
</script>
