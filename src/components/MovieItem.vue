<template>
  <li class="movie-item">
    <div class="movie-poster">
      <img
        :src="`${movie.Poster}`"
        alt="poster" />
    </div>

    <h3 class="movie-title">
      {{ movie.Title }}
    </h3>
    <div class="movie-year">
      Year: {{ movie.Year }}
    </div>
    <div class="movie-type">
      Type: {{ movie.Type }}
    </div>
    <button
      class="movie-detail"
      @click="$router.push({
        name:'movieDetail',
        params:{
          imdbID:movie.imdbID
        }
      })">
      detail
    </button>
  </li>
</template>
<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~/scss/_button.scss';

.movie-item {
  list-style: none;
  margin: 10px 10px 100px 10px;
  width: 200px;
  height: 350px;
  .movie-poster {
    width: 185px;
    height: 260px;
    border: 5px solid black;
    & > img{
      width: 185px;
      height: 260px;
    }
  }

  .movie-title {
    margin: 5px 0 5px 0;
    width: 185px;
    overflow: auto;
  }

  .movie-year,
  .movie-type {
    font-size: 15px;
  }

  .movie-detail {
    @include red-button;
    width: 97px;
    height: 25px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 20px;

    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
}


</style>