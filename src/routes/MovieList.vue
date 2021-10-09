<template>
  <Loading v-if="!isLoading && !movieSelected" />
  <section
    v-else
    :key="$route.params.page">
    <div
      v-if="movies.length !== 0"
      class="movies__header">
      <h1>"{{ movieTitle }}"에 대한 검색 결과</h1>
      <h1>총 {{ totalResults }}개의 검색 결과가 있습니다.</h1>
    </div>
    <div
      v-else
      class="noResult">
      <h1>검색 결과가 없습니다!</h1>
    </div>
    <ul class="movies__contents">
      <li
        v-for="movie in movies"
        :key="movie.imdbID"
        class="movie-list"
        @click="readMovieItem(movie.imdbID); movieSelected=true">
        <img
          :src="movie.Poster"
          onerror="this.src='https://cloud.filmfed.com/defaults/movie-poster/l_movie_poster_default.png'"
          alt="moviePoster"
          class="movie-poster" />
        <div class="movie-info">
          <span class="title">{{ movie.Title }}</span>
          <span class="year">{{ movie.Year }}</span>
        </div> 
      </li>
    </ul>
    <div class="page__footer">
      <Pagenation :page="page" />
    </div>
  </section>
  <MovieItemViewer
    v-if="movieSelected"
    @closeViewer="movieSelected=false" />
</template>

<script>
import MovieItemViewer from '~/components/MovieItemViewer'
import Loading from '~/components/Loading'
import Pagenation from '~/components/Pagenation'
export default {
  components:{
    MovieItemViewer,
    Loading,
    Pagenation
  },
  data(){
    return {
        movieSelected: false
      }
  },
  computed: {
    movies(){
      return this.$store.state.movieList.movieList
    },
    totalResults(){
      return this.$store.state.movieList.totalResults
    },
    movieTitle(){
      return this.$store.state.movieList.searchTitle
    },
    isLoading(){
      return this.$store.state.movieList.isLoading
    },
    page(){
      return this.$store.state.movieList.page
    }
  },
  watch: {
    $route(){
          this.$store.dispatch('movieList/readMovieList', {
          searchTitle: this.$route.params.title,
          page: this.$route.params.page,
        })
      }
  },
  created() {
        this.$store.dispatch('movieList/readMovieList', {
        searchTitle: this.$route.params.title,
        page: this.$route.params.page
      })
  },
  methods: {
    readMovieItem(movieId){
      this.$store.dispatch('movieList/readMovieItem', {
        searchId : movieId,
      })
    }
  }  
}
</script>

<style lang="scss" scoped>

section{
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 40px;
    font-weight: 600;
    text-align: center;
  }

  .movies__contents {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 10px;
    .movie-list {
        display: flex;
        padding: 20px 10px;
        flex-direction: column;
        flex-grow: 1;
        max-width: 500px;
        &:hover {
           transform: scale(1.1);
           opacity: .6;
        }

        .movie-poster {
          border-radius: 5px;
          object-fit: cover;
        }

        .movie-info {
          display: flex;
          justify-content: space-between;
          padding: 15px 10px;
          .title {
            font-size: 30px;
            font-weight: 500;
          }
          .year {
             font-size: 20px;
            font-weight: 400;
          }
        }
    }
  }
}
  
</style>