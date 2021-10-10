<template>
  <main :key="$route.params.keyword" class="main">
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
    </ul>
    <div ref="scroll"></div>
  </main>
  <Loading v-if="isLoading" />
  <Modal v-if="modalStatus" />
</template>

<script>
import Modal from '~/components/Modal';
import Loading from '~/components/Loading';

export default {
  components: {
    Modal,
    Loading
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
    },
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  created() {
    this.observer = new IntersectionObserver(this.observeElement, {
      root: this.$el,
      threshold: 0
    });
  },
  mounted() {
    this.observer.observe(this.$refs.scroll);
  },
  methods: {
    async showMovieDetails(selectedMovieId) {
      await this.$store.commit('saveSelectedMovieId', selectedMovieId);
      await this.$store.dispatch('fetchSelectedMovieDetails');
      await this.$store.commit('changeModalStatus');
    },
    observeElement(entries) {
      entries.forEach(({ isIntersecting }) => {
        const isLoading = this.$store.state.isLoading === true;
        const isResultsEmpty = this.$store.state.results.length === 0;

        if (!isIntersecting || isLoading || isResultsEmpty) {
          return;
        }

        this.observer.unobserve(this.$refs.scroll);
        this.$store.dispatch('fetchNextSearchResults');
        this.observer.observe(this.$refs.scroll);
      });
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

@media screen and (max-width: $breakpoint-xs - 1) {
  .main {
    &__result {
      grid-template-columns: repeat(1, 1fr);
    }

    &__guidance {
      padding-top: 6rem;
      font-size: $size-font-md;
    }
  }
}

@media screen and (min-width: $breakpoint-xs) and (max-width: $breakpoint-sm - 1) {
  .main {
    &__result {
      grid-template-columns: repeat(2, 1fr);
    }

    &__guidance {
      padding-top: 6rem;
      font-size: $size-font-lg;
    }
  }
}

@media screen and (min-width: $breakpoint-sm) and (max-width: $breakpoint-md - 1) {
  .main {
    &__result {
      grid-template-columns: repeat(2, 1fr);
    }

    &__guidance {
      font-size: $size-font-lg;
    }
  }
}

@media screen and (min-width: $breakpoint-md) and (max-width: $breakpoint-xl - 1) {
  .main {
    &__result {
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
