<template>
  <header>
    <button 
      class="welcom"
      @click="$router.push({name:'Home'})">
      🍿 주영 시네마 🍿 
    </button>
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
    margin:0;
    background-color: #F73E3E;
    .welcom{
      border:none;
      background-color: #F73E3E;
      font-size:30px;
      margin-bottom: 20px;
      color:white;
      &:hover{
          color:lightcoral;
      }
    }
    .movie-search {
      display: flex;

      .movie-search-input {
        width: 500px;
        border-right:none;
        border: none;
        border-radius: 0.1rem;
        background-color: white;
        &::placeholder{
        color: black ;
    }

    }
      .movie-search-submit {
        height: 509px;
        background-color: white;
        display: flex;
        justify-content: center;
        cursor: pointer;
        height: 35px;
        min-width: 60px;
        border: none;
        border-radius: 0.1rem;
        padding: 8px;
        &:hover{
          background-color:lightcoral;
        }
      }
    }
}
</style> 