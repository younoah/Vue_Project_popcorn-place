<template>
  <section v-if="!isLoading">
    <div class="inner">
      <div class="poster">
        <img
          :src="info.Poster"
          alt="" />
      </div>
      <div class="discription">
        <h1>{{ info.Title }}</h1>
        <h3>
          <span>{{ info.Released }}</span>
          <span>{{ info.Genre }}</span>
          <span>{{ info.Country }}</span>
        </h3>
        <div class="rates">
          {{ info.imdbRating }}
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  data() {
    return {
      done: false
    };
  },
  computed: {
    info() {
      return this.$store.state.movie.info;
    },
    isLoading() {
      return this.$store.state.movie.isLoading;
    }
  },
  created() {
    this.$store.dispatch('movie/getMovieInfo', {
      id: this.$route.params.id
    });
    console.log('done!');
  }
};
</script>

<style scoped>

</style>