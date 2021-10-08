<template>
  <div
    class="wrapper"
    @click="$router.push({
      name:'Info',
      params: {
        id: movie.imdbID
      }
    })">
    <img
      :class="{'no-poster' : !hasPoster}"
      :src="hasPoster ? movie.Poster : none"
      :alt="movie.Title + `-poster`" />
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
  data() {
    return {
      hasPoster: this.movie.Poster !== 'N/A'
    };
  },
};
</script>

<style lang="scss">
.wrapper {
  margin: 2.5rem;
  img {
    max-width: 250px;
  }
  img.no-poster{
    display: block;
    width: 400px;
    height: 380px;
    background-color: gray;
  }
}
</style>