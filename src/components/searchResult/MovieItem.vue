<template>
  <li class="item" @click="openModal">
    <figure class="movie">
      <img
        v-if="movie.Poster !== 'N/A'"
        class="movie__img"
        :src="movie.Poster"
        :alt="movie.Title"
      />
      <div v-else class="movie__img no-image">
        <span>🤣</span>
        <p>Oops!</p>
      </div>
      <!-- <img
        v-else
        class="movie__img"
        src="https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg"
        alt="포스터"
      /> -->
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
    async openModal(event) {
      this.$store.commit('assignState', { isLoading: true });
      await this.$store.dispatch('getMovieDetail', this.movie.imdbID);
      await this.$store.commit('assignState', { isShowModal: true });
      this.$store.commit('assignState', { isLoading: false });
    },
  },
};
</script>

<style lang="scss" scoped>
.movie {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__img {
    border-radius: 8px;
    width: calc(20vw - 32px);
    height: calc(20vw * 1.3);
    transition: transform 300ms;
    &:hover {
      transform: translateY(-8px);
    }
  }

  .no-image {
    background-color: lightgrey;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
      font-size: 5vw;
    }
    p {
      font-size: 2rem;
      color: grey;
    }
  }

  &__title {
    width: calc(20vw - 32px);
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
      width: calc(95vw - 32px);
      height: calc(95vw * 1.3);
    }
    &__title {
      width: calc(95vw - 32px);
    }
  }
}

@media screen and (min-width: $breakpoint-xs) and (max-width: $breakpoint-sm - 1) {
  .movie {
    &__img {
      width: calc(50vw - 32px);
      height: calc(50vw * 1.3);
    }
    &__title {
      width: calc(50vw - 32px);
    }
  }
}

@media screen and (min-width: $breakpoint-sm) and (max-width: $breakpoint-md - 1) {
  .movie {
    &__img {
      width: calc(50vw - 32px);
      height: calc(50vw * 1.3);
    }
    &__title {
      width: calc(50vw - 32px);
    }
  }
}

@media screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-xl - 1) {
  .movie {
    &__img {
      width: calc(33vw - 32px);
      height: calc(33vw * 1.3);
    }
    &__title {
      width: calc(33vw - 32px);
    }
  }
}

@media screen and (min-width: $breakpoint-2xl) {
  .movie {
    &__img {
      width: calc(15vw - 32px);
      height: calc(15vw * 1.3);
    }
    &__title {
      width: calc(15vw - 32px);
    }
  }
}
</style>
