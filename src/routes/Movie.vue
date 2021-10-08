<template>
  <h1>
    movie 
  </h1>
  <div
    v-if="!totalresult"
    class="movie">
    검색된 영화가 없습니다. 다시 입력해주세요
  </div>
  <div v-else>
    검색결과: {{ totalresult }}
  </div>
  <div
    v-if="$store.state.movie.isLoading"
    class="loader">
  </div>
  <ul
    v-if="!$store.state.movie.isLoading"
    class="movie-result">
    <li
      v-for="i in movieInfo"
      :key="i">
      <img
        class="movie-result-poster"
        :src="`${i.Poster}`" />
      {{ i.Title }}
      <button
        class="movie-moreinfo"
        @click="$router.push({
          name:'MoreInfo',
          params:{
            id:i.imdbID
          }})">
        영화 정보 상세보기
      </button>
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
    totalresult(){
        console.log(this.$store.state.movie.totalresult)
    return this.$store.state.movie.totalresult

},
    

},
    methods:{
    }
}
</script>
<style lang="scss" scoped>
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>