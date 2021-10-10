<template>
  <main class="main">
    <div v-if="keyword" class="main__guidance">
      Here's the result of searching for "{{ keyword }}"
    </div>
    <ul v-if="results.length" class="main__result">
      <li
        v-for="result in results"
        :key="result.id"
        class="search-result"
        @click="showMovieDetails(result.imdbID)"
      >
        <figure class="search-result__item">
          <img
            v-if="result.Poster === 'N/A'"
            src="../../static/no-image.png"
            alt="result.Title"
            class="search-result__image"
          />

      <img
        v-else
        :src="result.Poster"
        :alt="result.Title"
        class="search-result__image"
      />
      <figcaption class="search-result__title">
        {{ result.Title }}
      </figcaption>
    </figure>
  </li>
  <Modal v-if="modalStatus" />
</template>

<script>
import Modal from '~/components/Modal';

export default {
  components: {
    Modal
  },
  computed: {
    keyword() {
      return this.$store.state.keyword;
    },
    results() {
      return this.$store.state.results;
    },
    modalStatus() {
      return this.$store.state.modalStatus;
    }
  },
  methods: {
    async showMovieDetails(selectedMovieId) {
      await this.$store.commit('saveSelectedMovieId', selectedMovieId);
      await this.$store.dispatch('fetchSelectedMovieDetails');
      await this.$store.commit('changeModalStatus');
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 1rem;
  margin-bottom: 3rem;
  position: relative;

  &__guidance {
    padding: 3rem;
    font-size: $size-font-xl;
    text-align: center;
  }

  &__result {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 4rem;
    grid-column-gap: 1rem;
    justify-items: center;
    width: 80%;
    margin: 0 auto;
  }

  &__button {
    position: absolute;
    top: 55%;
    right: 3%;
  }
}

.search-result {
  display: inline-block;

  &__item {
    display: inline-block;
    width: 100%;
    max-width: 20rem;
    height: 100%;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0.5rem;
    transition: transform 250ms;
  }

  &__image:hover {
    transform: translateY(-1rem);
  }

  &__title {
    padding: 0.25rem 0;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    font-size: $size-font-lg;
  }
}
</style>
