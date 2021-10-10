<template>
  <SearchBar class="search-bar" />
  <div v-if="!$store.state.movie.isInitialize">
    <div id="notice-result">
      Search movie to watch
    </div>
  </div>
  <div v-else>
    <div v-if="isResult">
      <SearchResult />
      <PageNavigation />
    </div>
    <div v-else>
      <div id="notice-no-result">No Result. Search again </div>
    </div>
  </div>
</template>
<script>
import SearchBar from '~/components/SearchBar'
import SearchResult from '~/components/SearchResult'
import PageNavigation from '~/components/PageNavigation'
export default {
  components:{
    SearchBar,
    SearchResult,
    PageNavigation
  },
  computed:{
    isResult(){
      return this.$store.state.movie.movieList.Response
    }
  }
}
</script>
<style lang="scss" scoped>
  .search-bar{
    display: flex;
    justify-content: center;
  }
  #notice-result,
  #notice-no-result{
    position: relative;
    top: 200px;
    font-size: 100px;
    text-align: center;


  }

</style>