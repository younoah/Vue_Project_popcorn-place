<template>
  <h1
    v-if="isInitialize">
    Search results for '{{ $store.state.searchMovie.userTyping }}'.
  </h1>
</template>

<script>
export default {
  computed: {
    isInitialize() {
      return this.$store.state.searchMovie.isInitialize
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
    font-size: 3rem;
    text-align: center;
    margin: 40px 0;

    @media (max-width: 1000px) {
      font-size: 2rem;
    }
    @media (max-width: 800px) {
      font-size: 1.5rem;
    }
}
</style>