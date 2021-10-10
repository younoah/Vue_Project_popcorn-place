<template>
  <form>
    <input
      v-model="title"
      class="search-bar__input"
      type="text"
      placeholder=" search movie..."
      @keyup.enter="searchMovies" />
    <button
      class="search-bar__search-button"
      @click="searchMovies">
      search
    </button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      title: ''
    }
  },


  methods: {
    searchMovies() {
      this.$store.dispatch('movie/searchMovies', {
        title: this.title
      })
      this.$store.commit('movie/setMovieTitle',this.title)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/scss/_button.scss';

  .search-bar{
    margin-bottom: 100px;
    &__input{
      width: 500px;
      height: 50px;
      font-size: 30px;
      border-radius: 5px;
    }
    &__search-button{
      width: 80px;
      height: 55px;
      font-size: 20px;
      @include red-button;
    }
  }

</style>