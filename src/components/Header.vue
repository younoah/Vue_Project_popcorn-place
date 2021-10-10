<template>
  <header>
    <img
      class="logo"
      src="https://user-images.githubusercontent.com/66211721/136692998-a4b5009a-9ab0-4640-a762-4001ce3d90ed.png"
      alt="logo" 
      @click="$router.push({name:'Home'})" />
    <form
      class="movie-search"
      @submit.prevent="searchMovies"
      @submit="$router.push({name:'Movie'})">
      <input
        v-model="movieTitle"
        class="movie-search-input"
        type="text"
        placeholder="영화제목을 입력하세요" />
      <button class="movie-search-submit">
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
      this.$store.dispatch('movie/searchMovies', {
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
  width: 100%;
  height: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  background-color: #F73E3E;
  .logo{
    height: 250px;;
    margin:0px;
    padding:0px;
    cursor: pointer;

  }
  .welcom {
    border: none;
    background-color: #F73E3E;
    font-size: 30px;
    color: white;
    &:hover {
      color: lightcoral;
    }
  }

  .movie-search {
    display: flex;

    .movie-search-input {
      height:50px;
      width: 500px;
      border-right: none;
      border: none;
      border-radius: 0.1rem;
      background-color: white;

      &::placeholder {
        color: black;
      }

    }

    .movie-search-submit {
      height: 53px;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      min-width: 60px;
      border: none;
      border-radius: 0.1rem;
      &:hover {
        background-color: lightcoral;
      }
    }
  }
}
</style> 