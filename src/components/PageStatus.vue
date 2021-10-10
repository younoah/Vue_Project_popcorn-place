<template>
  <div class="page-status">
    <span>(  </span>
    <span>{{ currentPage }}</span>
    <span>  /  </span>
    <span>{{ totalPages }}</span>
    <span>  )</span>
  </div>
</template>
<script>
export default {
  computed:{
    totalResult(){
      return this.$store.state.movie.movieList.totalResults
    },
    currentPage(){
      return this.$store.state.movie.page
    },
    totalPages(){
      return parseInt(this.totalResult/10)+1
    },
  }
}
</script>