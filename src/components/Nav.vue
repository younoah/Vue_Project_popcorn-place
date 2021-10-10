<template>
  <nav class="btn-group">
    <RouterLink
      class="btn btn-secondary"
      to="/"
      @click="initializeSearch">
      Home
    </RouterLink>
    <RouterLink
      class="btn btn-secondary"
      to="/movie-like-page">
      LikeList
    </RouterLink>
  </nav>
</template>

<script>
export default {
  methods: {
    initializeSearch() {
      this.$store.commit('initializeMovieList')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_mixins";
@include nav-margin-bottom;
</style>