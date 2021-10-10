<template>
  <PageStatus />
  <div class="page-navigation">
    <button
      :disabled="currentPage===1"
      @click="moveToPrevPage">
      Prev
    </button>
    <button
      :disabled="currentPage===totalPages"
      @click="moveToNextPage">
      Next
    </button>
  </div>
</template>
<script>
import PageStatus from '~/components/PageStatus'
export default {
  components:{
    PageStatus
  },
  computed:{
    totalResult(){
      return this.$store.state.movie.movieList.totalResults
    },
    currentPage(){
      return this.$store.state.movie.page
    },
    movieTitle(){
      return this.$store.state.movie.title
    },

  },
  
  methods:{
    async moveToPrevPage() {
      this.$store.commit('movie/moveToPrev')
      await this.$store.dispatch('movie/searchMovies',{
        title:this.movieTitle
      })
    },
    async moveToNextPage() {
      this.$store.commit('movie/moveToNext')
      await this.$store.dispatch('movie/searchMovies',{
        title:this.movieTitle
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.page-status{
  text-align: center;
  font-size: 25px;
}
.page-navigation{
  display: flex;
  justify-content: center;
  & > button{
    margin: 20px;
    padding: 10px 20px 10px 20px;
    font-size: 25px;
  }

}
</style>