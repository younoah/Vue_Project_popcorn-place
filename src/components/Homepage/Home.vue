<template>
  <SearchBar
    v-model="title"
    @search="onSearch" />
  <MovieList
    :movies="movies" />
</template>

<script>
import SearchBar from './SearchBar';
import MovieList from './MovieList';

export default {
    components: { SearchBar, MovieList },
    data() {
        return {
            title: '',
            movies: [],
            page: 1,
            isLoading: false
        };
    },
    created() {
      // Infinity Scroll
      // debounce intersection Observer 적용 
      window.addEventListener('scroll', async ()=>{
        const isScrollEnded = window.innerHeight + window.scrollY >= document.body.offsetHeight;

        if(isScrollEnded && !this.isLoading) {
          this.isLoading = true;
          this.page++;
        
          const options = {title: this.title, page: this.page};
          const {Search: searchResults} = await this.$getMovies(options);
          
          this.movies = [...this.movies, ...searchResults];
          this.isLoading = false;
        }
      });
    },
    mounted() {
        console.log(this.$route);
    },
    methods: {
        async onSearch() {
            if(this.isLoading) return; 
            
            this.isLoading = true;
            this.page = 1;
            
            const options = {title: this.title, page: this.page};
            const {Search: searchResults} = await this.$getMovies(options);
            
            this.movies = searchResults;
            this.isLoading = false;
        },
    }
};
</script>

<style>
body {
  margin: 0px;
}
</style>