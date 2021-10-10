<template>
  <SearchBar />
  <MovieList />
</template>

<script>
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default {
    components: { SearchBar, MovieList },
    data() {
      return {
        isLoading: false
      };
    },
    computed: {
      options() {
        return {
          title: this.$store.state.title,
          page: this.$store.state.page
        };
      },
      movieList() {
        return this.$store.state.movieList;
      }
    },
    mounted() {
      window.addEventListener('scroll', async ()=>{
        const isScrollEnded = window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if(isScrollEnded && !this.isLoading) {
          this.isLoading = true;
          
          this.$store.commit('updatePage');
          await this.$store.dispatch('getMovieList', this.options);
                
          this.isLoading = false;
        }
      });
    },
    unmounted() {
      window.removeEventListener('scroll', e=> {});
    }
};
</script>

<style>
body {
  margin: 0px;
}
</style>