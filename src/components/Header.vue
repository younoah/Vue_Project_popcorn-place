<template>
  <header>
    <div class="welcom">
      🍿 반갑습니다 고객님 🍿 
    </div>
    <form 
      class="movie-search"
      @submit.prevent="searchMovies"
      @submit="$router.push({name:'Movie'})">
      <input
        v-model="movieTitle"
        class="movie-search-input"
        type="text" 
        placeholder="영화제목을 입력하세요" />
      <button 
        class="movie-search-submit">
        🔎
      </button>
    </form>
  </header>
</template>

<script>
export default {
  data() {
    return {
      movieTitle: ''
    }
  },
  methods: {
    searchMovies() {
      this.$store.dispatch('movie/searchMovies',{
        movieTitle: this.movieTitle
      })
    }
  }
}
</script>

<style lang="scss" scoped>
header {
    display: flex;
    flex-direction: column;
    width:100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    background-color: #F73E3E;
    .welcom{
      margin-bottom: 20px;
      color:azure
    }
    .movie-search {
      display: flex;

      .movie-search-input {
        width: 500px;
        border: none;
        border-radius: 0.1rem;
    }
      .movie-search-submit {
        display: flex;
        justify-content: center;
        cursor: pointer;
        height: 35px;
        min-width: 60px;
        border: 1px solid lightgray;
        border-left: none;
        border-radius: 0.1rem;
        padding: 8px;
      }
    }
}
</style> 