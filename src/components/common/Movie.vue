<template>
  <article
    class="
      movieList__movie
      movie
      d-flex-col
      col
      py-2
      my-4
      hover-zoom
    "
    @click="onClick"
  >
    <div
      class="
        movie__img
        card card-cover
        overflow-hidden
        rounded-5
        shadow-lg
        bg-success
      "
      :style="{
        backgroundImage: `url(${
          movieItem.Poster !== 'N/A'
            ? movieItem.Poster
            : 'https://www.pngkey.com/png/full/4-42320_movie-reels-png-vector-transparent-library-ennio-morricone.png'
        })`,
      }"
    ></div>
    <section
      class="
        movie__info movie-info
        d-flex-col
        list-unstyled
        mt-auto
        text-center text-white
      "
    >
      <h5 class="my-2 movie-info__title me-auto fw-bold">
        {{ movieItem.Title }}
      </h5>
      <h6 class="movie-info__year me-auto">
        <small>{{ movieItem.Year }}</small>
      </h6>
    </section>
  </article>
</template>

<script>
export default {
  props: {
    movieItem: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    onClick() {
      const { imdbID } = this.movieItem;
      console.log(imdbID);
      this.$router.push(`/movie/${imdbID}`);
      this.$store.dispatch('movie/getMovieDetailsById', {
        id: imdbID,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  &:hover {
    cursor: pointer;
    background: rgba($green-900, 0.8);
    border-radius: 5px;
  }
  .movie__img {
    height: 400px;
    background-size: cover;
    background-position: 50%;
  }
}
</style>
