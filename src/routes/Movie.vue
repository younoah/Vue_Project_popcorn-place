<template>
  <div class="main container">
    <div class="row row-cols-1 row-cols-md-2 py-5">
      <div class="main__poster col-md-6">
        <img
          class="w-100 h-100"
          :src="`${posterUrl.replace(/_SX3?00/, '_SX700')}`"
          alt="결과"
        />
      </div>
      <section
        class="
          main__details
          col-md-6
          text-white text-center text-md-start
        "
      >
        <header class="details__title fs-1 fw-bold">
          {{ movieDetails.Title }}
        </header>
        <h4 class="details__detail my-3">
          <h6 class="fw-bold">Released:</h6>
          {{ movieDetails.Released }}
        </h4>
        <h5 class="details__detail my-3">
          <h6 class="fw-bold">PG Grade:</h6>
          {{ movieDetails.Rated }}
        </h5>
        <h5 class="details__detail my-3">
          <h6 class="fw-bold">Actors:</h6>
          {{ movieDetails.Actors }}
        </h5>
        <h5 class="details__detail my-3">
          <h6 class="fw-bold">Genre:</h6>
          {{ movieDetails.Genre }}
        </h5>
        <h5 class="details__detail my-3">
          <h6 class="fw-bold">Director:</h6>
          {{ movieDetails.Director }}
        </h5>
        <h5 class="details__detail my-3">
          <h6 class="fw-bold">Runtime:</h6>
          {{ movieDetails.Runtime }}
        </h5>
        <h5 class="details__detail my-3">
          <h6 class="fw-bold">Rating:</h6>
          {{ `${movieDetails.imdbRating} / 10` }}
        </h5>
        <h5 class="details__detail my-3">
          <h6 class="fw-bold">Plot:</h6>
          {{ movieDetails.Plot }}
        </h5>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movieDetails() {
      return this.$store.state.movie.details;
    },
    posterUrl() {
      return this.$store.state.movie.details.Poster;
    },
  },
  async created() {
    await this.$store.dispatch(
      'movie/getMovieDetailsById',
      {
        id: this.$route.params.movieId,
      },
    );
    console.log(this.movieDetails);
  },
};
</script>

<style lang="scss" scoped>
.main {
  .main__details {
    .details__detail {
      .fw-bold {
        color: $yellow-300;
      }
    }
  }
}
</style>
