<template>
  <li class="item" @click="showMovieDetails">
    <figure class="movie">
      <img
        v-if="movie.Poster !== 'N/A'"
        class="movie__img"
        :src="movie.Poster"
        :alt="movie.Title"
      />
      <img
        v-else
        class="movie__img"
        src="https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg"
        alt="포스터"
      />
      <figcaption class="movie__title">{{ movie.Title }}</figcaption>
    </figure>
  </li>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    showMovieDetails() {
      console.log('showMovieDetails');
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  cursor: pointer;
  &__img {
    width: calc(20vw - 32px);
    height: calc(20vw * 1.3);
    transition: transform 300ms;
    &:hover {
      transform: translateY(-8px);
    }
  }

  &__title {
    display: flex;
    justify-content: center;
    margin: 16px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media screen and (max-width: $breakpoint-xs - 1) {
  .movie {
    &__img {
      width: calc(100vw - 32px);
      height: calc(100vw * 1.3);
    }
  }
}

@media screen and (min-width: $breakpoint-xs) and (max-width: $breakpoint-sm - 1) {
  .movie {
    &__img {
      width: calc(50vw - 32px);
      height: calc(50vw * 1.3);
    }
  }
}

@media screen and (min-width: $breakpoint-sm) and (max-width: $breakpoint-md - 1) {
  .movie {
    &__img {
      width: calc(50vw - 32px);
      height: calc(50vw * 1.3);
    }
  }
}

@media screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-xl - 1) {
  .movie {
    &__img {
      width: calc(33vw - 32px);
      height: calc(33vw * 1.3);
    }
  }
}
</style>
