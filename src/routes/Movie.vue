<template>
  <div class="list-header">
    <h1>
      🎬 Movie list 
    </h1>
    <div
      v-if="$store.state.movie.isLoading"
      class="loader">
    </div>
    <div v-else>
      <div
        v-if="!isLoading&&!totalresult"
        class="movie-result">
        검색된 영화가 없습니다. 다시 입력해주세요.
      </div>
      <div
        v-else 
        class="movie-rusult-find">
        찾은 영화 수: {{ CurrentMovieCount }}/{{ totalresult }}
        <div class="nav-page">
          <button
            class="nav-page-prev"
            @click.prevent="onPrevPages"
            @click="$router.push({name:'Movie'})">
            ◀prev
          </button>
          <button
            class="nav-page-next" 
            @click.prevent="onNextPages"
            @click="$router.push({name:'Movie'})">
            next▶
          </button>
        </div>
      </div>
    </div>

    <button
      class="movie-movehome"
      @click="$router.push({name:'Home'})">
      메인화면으로 🏠
    </button>
  </div>
  <div class="movie-result">
    <ul
      v-if="!$store.state.movie.isLoading&&totalresult"
      class="movie-result-list">
      <li
        v-for="i in movieInfo"
        :key="i">
        <img
          class="movie-result-poster"
          :src="`${i.Poster}`" />
        {{ i.Title }}
        <button
          class="movie-result-moreinfobutton"
          @click="$router.push({
            name:'MoreInfo',
            params:{
              id:i.imdbID
            }})">
          ↪🔍
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

    data(){
      let pageCount=0
        return {
          pageCount
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
    CurrentMovieCount(){
        console.log(this.$store.state.movie.currentPageMovieCount)
    return this.$store.state.movie.currentPageMovieCount
    },
    onNextPage(){
      const info=this.$store.state.movie.movieInfo
      return info
    },
    
  },
    methods:{
      onNextPages(){
          if(parseInt(this.$store.state.movie.totalresult)===this.$store.state.movie.currentPageMovieCount){
            alert('마지막 페이지 입니다!')
            return
          } 
        this.$store.commit('movie/increaseCurrentPage')
        this.$store.dispatch('movie/nextMoviesUpdate',{
        movieTitle: this.$store.state.movie.movieTitle})
      },
      onPrevPages(){
        if(this.$store.state.movie.page>1){
          if(parseInt(this.$store.state.movie.totalresult)===this.$store.state.movie.currentPageMovieCount){
                    this.$store.commit('movie/decreaseCurrentPage')
            this.$store.dispatch('movie/prevLastPageMoviesUpdate',{
            movieTitle: this.$store.state.movie.movieTitle})
            return
          } 
        this.$store.commit('movie/decreaseCurrentPage')
        this.$store.dispatch('movie/prevMoviesUpdate',{
        movieTitle: this.$store.state.movie.movieTitle})
        }
        else{
          alert('페이지의 첫번째 입니다!')
          return
        }
      }
    }
}
</script>
<style lang="scss" scoped>
h1{
  padding-top:20px;
  margin:0px;
  color:white;
  border-bottom: solid white;
}
.loader {
  border: 16px solid gray; /* Light grey */
  border-top: 16px solid white; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
  align-content: center;
  justify-items: center;
  text-justify: center;

}
.movie-result{
  font-size:30px;
  color:white;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.movie-rusult-find{
  font-size:20px;
  color:white;
  padding:10px;
  .nav-page{
    .nav-page-prev{
      font-size:20px;
      border:none;
      background-color: black;
      color: white;
        &:hover{
          color:red;
        }
    }
      .nav-page-next{
      margin-left:20px;
      font-size:20px;
      border:none;
      background-color: black;
      color: white;
        &:hover{
          color:red;
        }
    }

  }
  
}
.movie-movehome{
  margin-left:10px;
  font-size:20px;
  border:none;
  background-color: black;
  color: white;
    &:hover{
      color:royalblue;
    }
}
.movie-result-list{
  display: grid;
  align-items: center;
  justify-content: center;
  text-align: center;
  grid-template-columns: repeat(5,1fr);
  gap:3px;
  margin-top:20px;
  padding-inline: 100px;
  li{
    margin:10px;
    text-align: right;
    .movie-result-poster{
      width: 100%;
      height: 350px;
    }
    .movie-result-moreinfobutton{
      font-size:30px;
      border:none;

      background-color: black;
      color: white;
        &:hover{
          border-bottom:solid blue;
          color:blue;
        }
    }
  }
  
}
</style>