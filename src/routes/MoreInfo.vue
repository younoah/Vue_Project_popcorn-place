<template>
  <ul class="movie-detail">
    <li
      v-for="i in moreInfomation"
      :key="i">
      <img
        class="movie-result-poster"
        :src="`${i.Poster}`" /><br />
      <span>제목: {{ i.Title }}</span><br />
      <span>개봉일: {{ i.Released }}</span><br />
      <span>작가: {{ i.Writer }}</span><br />
      <span>개봉년도: {{ i.Year }}</span><br />
      <span>감독: {{ i.Director }}</span><br />
      <span>주연 배우: {{ i.Actors }}</span><br />
      <span>장르: {{ i.Genre }}</span><br />
      <span>수상: {{ i.Awards }}</span><br />
      <span>박스오피스: {{ i.BoxOffice }}</span><br />
      <span>DVD 출시일: {{ i.DVD }}</span>
    </li>
  </ul>
  <button
    class="movie-moreinfo"
    @click="$router.push({name:'Movie'})">
    뒤로가기
  </button>
</template>

<script>

export default {
    components:{
        
    },
    computed:{
        moreInfomation(){
            const moreInfo=this.$store.state.movie.moreInfomation
            return moreInfo
        }
    },
    async created(){
     await this.$store.dispatch('movie/readMovieInfo', {
            id: this.$route.params.id
        })
    }
  
}
</script>
