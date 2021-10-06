<template>
  <div class="container">
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
  }
};
</script>