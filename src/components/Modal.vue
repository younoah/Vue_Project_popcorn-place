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
      <div>
        <h1 class="details-modal__title">
          {{ details.Title }}
        </h1>
        <div class="details-modal__info">
          <div class="details-modal__info-top">
            <span class="details-modal__year"> {{ details.Year }}</span>
            <span class="details-modal__separator"> | </span>
            <span class="details-modal__genre">
              {{ details.Genre }}
            </span>
          </div>
          <div class="details-modal__director">
            Created by : {{ details.Director }}
          </div>
          <div class="details-modal__writer">
            Writed by : {{ details.Writer }}
          </div>
          <div class="details-modal__actors">
            Starring : {{ details.Actors }}
          </div>
          <div class="details-modal__plot">
            {{ details.Plot }}
          </div>
          <div class="details-modal__language">
            {{ details.Language }}
          </div>
          <div class="details-modal__country">
            {{ details.Country }}
          </div>
          <div class="details-modal__awards">
            {{ details.Awards }}
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
  @include init-modal-position;

  &__overlay {
    @include init-modal-position;
    opacity: 0.6;
    background-color: #141414;
  }

  &__content {
    position: relative;
    z-index: 2;
    top: 25%;
    max-width: 50%;
    margin: auto;
    background-color: #fff;
    color: #000;
    min-height: 500px;
    opacity: 0.95;
    border-radius: 3rem;
    padding: 2rem;
    display: flex;
    align-items: center;
  }

  &__image-wrap {
    margin-right: 2rem;
  }

  &__image {
    width: auto;
    height: 450px;
    object-fit: cover;
    border-radius: 0.5rem;
  }

  &__title {
    font-size: 2rem;
  }

  &__separator {
    margin: 0 0.5rem;
  }

  &__title,
  &__info-top,
  &__year,
  &__genre,
  &__director,
  &__writer,
  &__actors,
  &__plot,
  &__language,
  &__country,
  &__awards {
    margin-bottom: 1rem;
  }

  &__plot {
    line-height: 1.5rem;
  }
}
</style>
