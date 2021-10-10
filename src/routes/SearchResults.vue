<template>
  <div class="search-results__wrapper">
    <FoundResults searchResults="searchResults"/>
    <div class="search-results">
    <ul
      class="search-results__list">
      <li
        v-for="searchResult in searchResults"
        :key="searchResult.imdbID"
        tabindex="0"
        :class="`search-results__list-item ${searchResult.imdbID}`"
        @click="submit"
        @keyup.enter="submit">
        <h2 class="infos">
          <p class="title">
            {{ searchResult.Title.toUpperCase() }}
            <span class="year">
              ({{ searchResult.Year }})
            </span>
          </p>
          
          <p class="type">
            타입: {{ searchResult.Type }}
          </p>
        </h2>
        <div class="poster">
          <template v-if="searchResult.Poster === 'N/A'">
            <img
              class="no-poster"
              src="../assets/images/no-poster.jpeg"
              alt="" />
            <p>포스터가 없습니다 😣</p>
          </template>
          <template v-else>
            <img
              :src="searchResult.Poster"
              :alt="`(${searchResult.Type}) ${searchResult.Title}`" />
          </template>
        </div>
      </li>
      <div
        ref="scrollObserver"
        class="scroll-observer"></div>
    </ul>
    </div>
    <Loading />
  </div>
</template>

<script>
import FoundResults from '~/components/SearchResults/FoundResults'
import Loading from '~/components/Loading'

export default {
  components: {
    FoundResults,
    // Loading
  },
  data() {
    return {
      page: 0,
    }
  },
  computed: {
    searchResults() {
      return this.$store.state.searchResult.Search
    },
    totalResults() {
      return this.$store.state.searchResult.totalResults
    },
  },
  mounted() {
      this.initIntersectionObserver()
      // mounted 됐을 때 observer 호출
  },
  methods: {
    async getMoreArticles() {
      await this.$store.dispatch('searchResult/updateSearchResults', {
        keyword: this.$route.params.keyword,
        page: ++this.page
      })
    },
    initIntersectionObserver() {
      const io = new IntersectionObserver(async ([entry], observer) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target)
          await this.getMoreArticles()
          if (this.searchResults.length < this.totalResults) {
            // 불러온 배열의 길이가 totalResults의 길이보다 작을 때만 observe 갱신
            this.$nextTick(() => observer.observe(entry.target))
          }
        } 
      }, {
        root: null,
        rootMargin: '0px',
        threshold: .5 // 마지막 요소가 다 들어왔을 때 isIntersecting
      })
      io.observe(this.$refs.scrollObserver)
    },
    async submit(e) {
      const [ _, id ] = e.target.closest('li').className.split(' ')
      this.$router.push({ name: 'Detail', params: { id } })
    },
  }
}
</script>

<style lang="scss" scoped>

.scroll-observer {
  border: 1px solid transparent;
}

.search-results {
  position: relative;

  &__list {
    display: grid;
    grid-template-columns: repeat($GRID_COLUMNS_SM, 1fr);
    justify-items: center;
    gap: $BASE_PADDING * 4;
    padding-top: $HEADER_HEIGHT;
    max-width: $BREAKPOINT_LG;
    margin: 0 auto;

    &-item {
      @include flexbox;
      flex-direction: column;
      box-shadow: $BOX_SHADOW;
      border-radius: $BORDER_RADIOUS;
      padding: $BASE_PADDING * 2;
      max-width: $XS300_WIDTH;
      min-height: $XS300_HEIGHT;
      text-align: center;
      transition: transform 300ms;

      &:hover {
        transform: translateY(-10px);
      }

      .infos {
        padding: $BASE_PADDING 0;
        .title {
          font-size: 1.2em;
          font-weight: 700;

          .year {
            font-weight: 500;
          }
        }
      .type {
        padding-top: $BASE_PADDING;
      }
      }



      .poster {
        flex-grow: 1;
        @include flexbox;
        flex-direction: column;
        img {
          width: 100%;
          max-width: $XS300;
          border-radius: $BORDER_RADIOUS;
        }
        img.no-poster {
          padding-bottom: $BASE_PADDING;
        }
      }
    }
  }
}

  li {
    border: 1px solid $COLOR_GRAY;
  }

  .search-results {
    &__list {
      @include responsive('md') {
        grid-template-columns: repeat($GRID_COLUMNS_MD, 1fr);
      }

      @include responsive('lg') {
        grid-template-columns: repeat($GRID_COLUMNS_LG, 1fr);
      }
    }
  }
</style>