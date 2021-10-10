<template>
  <section
    class="detail">
    <template v-if="currentResult.Poster === 'N/A'">
      <img
        src="../assets/images/no-poster.jpeg" 
        alt="poster background"
        class="poster__background" />
    </template>
    <img
      v-else
      :src="currentResult.Poster.replace(/SX300/gi,'SX700')" 
      alt="poster background"
      class="poster__background" />
    <div class="detail__card">
      <h1 class="detail__card-title">
        {{ currentResult.Title }} <span class="year">({{ currentResult.Year }})</span>
      </h1>
      <div class="detail__content">
        <div class="poster">
          <template v-if="currentResult.Poster === 'N/A'">
            <img
              src="../assets/images/no-poster.jpeg" 
              alt="poster"
              class="poster__main" />
            <p class="no-poster__desc">
              이미지가 없습니다
            </p>
          </template>
          <img
            v-else
            :src="currentResult.Poster" 
            alt="poster"
            class="poster__main" />
        </div>
        <div>
          <ul class="detail__content-infos">
            <li>
              <dl class="info">
                <dt class="info-title">
                  RELEASED:
                </dt>
                <dd class="info-content">
                  {{ currentResult.Released }}
                </dd>
              </dl>
            </li>
            <li>
              <dl class="info"> 
                <dt class="info-title">
                  GENRE
                </dt>
                <dd class="info-content">
                  {{ currentResult.Genre }}
                </dd>
              </dl>
            </li>
            <li>
            </li><li>
              <dl class="info"> 
                <dt class="info-title">
                  TYPE
                </dt>
                <dd class="info-content">
                  {{ putIcon() }}
                </dd>
              </dl>
            </li>
            <li>
              <dl class="info"> 
                <dt class="info-title">
                  COUNTRY
                </dt>
                <dd class="info-content">
                  {{ currentResult.Country }}
                </dd>
              </dl>
            </li>
            <li>
              <dl class="info"> 
                <dt class="info-title">
                  LANGUAGE
                </dt>
                <dd class="info-content">
                  {{ currentResult.Language }}
                </dd>
              </dl>
            </li>
            <li>
            </li><li>
              <dl class="info"> 
                <dt class="info-title">
                  RATED
                </dt>
                <dd class="info-content">
                  {{ currentResult.Rated }}
                </dd>
              </dl>
            </li>
            <li>
              <dl class="info"> 
                <dt class="info-title">
                  RUNTIME
                </dt>
                <dd class="info-content">
                  {{ currentResult.Runtime }}
                </dd>
              </dl>
            </li>
            <li>
              <dl class="info"> 
                <dt class="info-title">
                  RATING
                </dt>
                <dd
                  class="info-content">
                  <p v-if="!currentResult.Ratings[0]">
                    N/A
                  </p>
                  <template v-if="currentResult.Ratings[0]">
                    <span class="material-icons grade">
                      grade
                    </span>{{ currentResult.Ratings[0] && currentResult.Ratings[0].Value }} <span
                      class="desc">from {{ currentResult.Ratings[0] && currentResult.Ratings[0].Source }}</span>
                  </template>
                </dd>
              </dl>
            </li>
            <li>
              <dl class="info"> 
                <dt class="info-title">
                  BOXOFFICE
                </dt>
                <dd :class="`info-content ${(currentResult.BoxOffice === 'N/A' || currentResult.BoxOffice === 'N/A') ? '' : 'important'}`">
                  {{ currentResult.BoxOffice || 'N/A' }}
                </dd>
              </dl>
            </li>
            <li>
            </li><li>
              <dl class="info"> 
                <dt class="info-title">
                  AWARDS
                </dt>
                <dd class="info-content">
                  {{ currentResult.Awards.replace(/Nominated for | total/gi, '') }}
                </dd>
              </dl>
            </li>
            <li>
              <dl class="info"> 
                <dt class="info-title">
                  PRODUCTION
                </dt>
                <dd
                  class="info-content"
                  v-html="currentResult.Production">
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
      <button
        aria-label="줄거리 보러가기"
        :plot="currentResult.Plot">
        줄거리가 보고 싶다면?
      </button>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    currentResult() {
      return this.$store.state.searchResult.currentResult
    },
    isLoading() {
      this.$store.getters['searchResult/isLoading']
    }
  },
  created() {
      this.initCurrentResult()
  },
  methods: {
    async initCurrentResult() {
      await this.$store.dispatch('searchResult/getCurrentResult', {
        id: this.$route.params.id
      })
    },
    putIcon() {
      const type = this.currentResult.Type
      if ( type === 'movie') {
        return `${type} 🎥`
      } else if ( type === 'series' ) {
        return `${type} 🔁`
      } else if ( type === 'game' ) {
        return `${type} 🎮`
      } else {
        return `${type} 💥` // episode
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.detail {
  @include flexbox;
  height: calc(100vh - $HEADER_HEIGHT);
  min-height: $XS300_HEIGHT;

  &__card {
    @include flexbox;
    flex-direction: column;
    width: 100%;
    height: $XS300_HEIGHT;
    background-color: $COLOR_WHITE;

    &-title {
      font-size: 20px;
      font-weight: 700;
      color: $COLOR_RED;
      padding: $BASE_PADDING * 2 0;

      .year {
        font-size: 1rem;
        color: $COLOR_PRIMARY;
      }
    }
  }

  &__content {
    @include flexbox;
    padding: $BASE_PADDING;
    box-shadow: $BOX_SHADOW;

    

    &-infos {
      li {
        margin: $BASE_PADDING 0;
        transition: transform 200ms;

        &:hover {
          transform: translateY(-3px);
        }
      }
      .info {
        display: grid;
        grid-template-columns: 1fr 6fr;

        &-title {
          padding-right: $BASE_PADDING * 2;
          font-weight: 700;
        }

        &-content {
          &.important {
            color: $COLOR_BLUE;
          }

          .desc {
            font-size: 13px;
            color: lighten($COLOR_PRIMARY, 50%);
          }

          .material-icons.grade {
            font-size: 16px;
            color: $COLOR_YELLOW;
            vertical-align: top;
          }
        }
      }
    }
  }
}
  .poster {
    padding-right: $BASE_PADDING * 3;

    &__background {
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      filter: blur(9px);
      transform: scale(1.02);
    }

    .no-poster__desc {
      text-align: center;
    }

    &__main {
      width: 200px;
      border-radius: $BORDER_RADIOUS;
      border: 5px solid $COLOR_RED;
      box-shadow: $BOX_SHADOW;
    }
  }

  
</style>