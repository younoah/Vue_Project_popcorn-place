<template>
  <div class="wrapper">
    <img
      :src="movie.Poster"
      :alt="movie.Title" />
  </div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  },
};
</script>

<style lang="scss">
.wrapper {
  margin: 2.5rem;
  img {
    max-width: 250px;
  }
}
</style>