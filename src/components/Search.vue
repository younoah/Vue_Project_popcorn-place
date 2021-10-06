<template>
  <form
    class="search-form" 
    @submit.prevent="onSubmit">
    <div class="input-group mb-3">
      <input
        ref="input"
        type="text"
        class="form-control"
        placeholder="Search Movies"
        aria-label="Search Movies"
        aria-describedby="button-addon2" />
      <button
        id="button-addon2"
        class="btn btn-outline-secondary"
        type="button">
        Search
      </button>
    </div>
  </form>
</template>

<script>
export default {
  methods: {
    async onSubmit() {
      const searchWord = this.$refs.input.value;

      this.$store.dispatch('movie/searchMovies', {
        searchWord,
        page: 1
      });
      /*
      const res = await fetch(`https://www.omdbapi.com?apikey=7035c60c&s=${searchWord}&page=1`,{
        method: 'GET',
      }).then(res=>res.json());
      console.log(res);
      */
    }
  }
};
</script>
<style lang="scss" scoped>
  $color: orange;
h1 {
  color: $color;
}
</style>