<template>
  <div class="details-modal">
    <div class="details-modal__overlay" @click="changeModalStatus"></div>
    <div class="details-modal__content">
      <div class="details-modal__image-wrap">
        <img
          :src="details.Poster"
          :alt="details.Title"
          class="details-modal__image"
        />
      </div>
      <div class="details-modal__text">
        <h1 class="details-modal__title">
          {{ details.Title }}
        </h1>
        <div class="details-modal__info">
          <div class="details-modal__info-top">
            <span class="details-modal__year"> 📅 {{ details.Year }}</span>
            <span class="details-modal__genre">✔️ {{ details.Genre }} </span>
          </div>
          <div class="details-modal__plot">
            {{ details.Plot }}
          </div>
          <div class="details-modal__director">
            <p><b> Created by 🎬 </b> {{ details.Director }}</p>
          </div>
          <div class="details-modal__writer">
            <p><b> Writed by ✍️ </b> {{ details.Writer }}</p>
          </div>
          <div class="details-modal__actors">
            <p><b> Starring 🤝 </b> {{ details.Actors }}</p>
          </div>
          <div class="details-modal__language">
            <p><b> Language 💬 </b> {{ details.Language }}</p>
          </div>
          <div class="details-modal__country">
            <p><b> Country 🌏 </b> {{ details.Country }}</p>
          </div>
          <div class="details-modal__awards">
            <p><b> Awards 🏆 </b> {{ details.Awards }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    details() {
      return this.$store.state.selectedMovieDetails;
    }
  },
  methods: {
    changeModalStatus() {
      this.$store.commit('changeModalStatus');
    }
  }
};
</script>

<style lang="scss" scoped>
.details-modal {
  @include init-position;
  position: relative;
  z-index: 1;

  &__overlay {
    @include init-position;
    opacity: 0.9;
    background-color: #141414;
  }

  &__content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    opacity: 0.9;
    width: 50%;
    height: 50%;
    background-color: #fff;
    color: $color-font-body;
    border-radius: 3rem;
    padding: 2rem;
    display: flex;
    justify-content: center;
  }

  &__image-wrap {
    @include flex-align-center;
    margin-right: 2rem;
  }

  &__image {
    height: 100%;
    width: 100%;
    min-width: 18.75rem;
    object-fit: cover;
    border-radius: 1rem;
  }

  &__text {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
  }

  &__title {
    font-size: 2rem;
    color: $color-font-title;
    font-weight: 800;
    margin-bottom: 0.5rem;
  }

  &__year {
    margin-right: 1rem;
  }

  &__director,
  &__writer,
  &__actors,
  &__language,
  &__country,
  &__awards > p {
    color: $color-font-title;
  }

  &__info-top,
  &__plot,
  &__year,
  &__director,
  &__writer,
  &__actors,
  &__language,
  &__country,
  &__genre,
  &__awards {
    margin-bottom: 2rem;
  }

  &__info-top,
  &__plot {
    line-height: 2rem;
    color: $color-font-title;
  }
}

@media screen and (min-width: $breakpoint-2xl) and (max-width: $breakpoint-3xl) {
  .details-modal {
    &__content {
      width: 55%;
      height: 55%;
    }
  }
}

@media screen and (min-width: $breakpoint-xl) and (max-width: $breakpoint-2xl - 1) {
  .details-modal {
    &__content {
      width: 60%;
      height: 60%;
    }
  }
}

@media screen and (min-width: $breakpoint-lg) and (max-width: $breakpoint-xl - 1) {
  .details-modal {
    &__content {
      width: 65%;
      height: 65%;
    }
  }
}

@media screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-lg - 1) {
  .details-modal {
    &__content {
      flex-direction: column;
    }

    &__image-wrap {
      width: 50%;
      margin: 3rem auto;
    }

    &__content {
      width: 75%;
      height: 75%;
    }
  }
}

@media screen and (max-width: $breakpoint-md - 1) {
  .details-modal {
    &__content {
      flex-direction: column;
    }

    &__image-wrap {
      width: 50%;
      margin: 3rem auto;
    }

    &__image {
      min-width: 15rem;
    }

    &__content {
      width: 90%;
      height: 80%;
    }
  }
}
</style>
