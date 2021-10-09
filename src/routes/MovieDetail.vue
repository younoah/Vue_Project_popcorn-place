<template>
  <div
    v-if="isInitialize"
    class="movie__inner">
    <button
      type="button"
      class="btn btn-light"
      @click="backward">
      <span class="material-icons">
        keyboard_backspace
      </span>
      뒤로가기
    </button>
    <h1>
      {{ movieDetails.Title }}
      <span class="badge bg-secondary">{{ movieDetails.Year }}</span>
    </h1>
    <div class="movie__poster">
      <img
        :src="movieDetails.Poster !== 'N/A'
          ? movieDetails.Poster.replace('300', '700')
          : 'https://allmovies.tube/assets/img/no-poster.png'"
        :alt="movieDetails.Title">
      <ul>
        <template
          v-for="rating in movieDetails.Ratings"
          :key="rating">
          <li>
            <span
              class="badge"
              :class="{ 'bg-success': isGreat(rating.Value),
                        'bg-warning text-dark': isGood(rating.Value),
                        'bg-danger': isBad(rating.Value) }">
              {{ rating.Source }} - {{ rating.Value }}
            </span>
          </li>
        </template>
      </ul>
    </div>
    <div class="movie__details">
      <h3>
        <span class="material-icons">
          theaters
        </span>영화 정보
      </h3>
      <div>
        <ul>
          <li>요약 <span class="division">|</span> {{ movieDetails.Genre }} <span class="division">|</span> {{ movieDetails.Country }} <span class="division">|</span> {{ movieDetails.Runtime }}</li>
          <li>개봉 <span class="division">|</span> {{ movieDetails.Released }}</li>
          <li>감독 <span class="division">|</span> {{ movieDetails.Director }}</li>
          <li>출연 <span class="division">|</span> {{ movieDetails.Actors }}</li>
        </ul>
        <h4>
          <span class="material-icons">
            auto_stories
          </span>줄거리
        </h4>
        <p>
          {{ movieDetails.Plot }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    movieDetails() {
      return this.$store.state.searchMovie.movieDetails
    },
    isInitialize() {
      return this.$store.state.searchMovie.isInitialize
    }
  },
  methods: {
    isGreat(value) {
      return parseInt(value, 10).toString(10)[0] >= 8
    },
    isGood(value) {
      return parseInt(value, 10).toString(10)[0] >= 6 && parseInt(value, 10).toString(10)[0] < 8
    },
    isBad(value) {
      return parseInt(value, 10).toString(10)[0] < 6
    },
    backward() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.movie__inner {
  position: relative;
  background-color: rgba(black, .2);
  border-bottom: {
    left-radius: 20px;
    right-radius: 20px;
  }
  margin-bottom: 100px;

  button {
    display: flex;
    align-items: center;
    gap: 4px;
    position: absolute;
    top: 30px;
    right: 30px;
  }
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    padding: 28px;
    width: 70%;

    .bg-secondary {
      font-size: 0.75rem;
      vertical-align: middle;
    }
  }
  .movie__poster {
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 12px;
    img {
      max-width: 400px;
      width: 100%;
      margin: 0 40px;
    }
    ul {
      display: flex;
      gap: 12px;
      flex-flow: wrap;
      justify-content: center;
    }
  }

  .movie__details {
    padding: 20px 40px;

    h3 {
      font-size: 1.7rem;
      font-weight: 700;
      padding-bottom: 12px;
      margin-bottom: 12px;
      border-bottom: 4px solid #555;
      display: inline-block;
      span {
        margin-right: 8px;
      }
    }

    ul {
      li {
        margin-bottom: 8px;

        .division {
          font-size: 1rem;
          color: #777;
        }
      }
    }

    h4 {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 20px 0;
      font-size: 1.2rem;
    }

    p {
      text-align: justify;
      padding: 12px;
      border: 1px solid #999;
      border-radius: 4px;
      line-height: 24px;
      text-indent: 12px;
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 800px) {
  .movie__inner {
    margin-bottom: 50px;
    .movie__poster {
      img {
        width: 80%;
      }
    }
  }
}

@media (max-width: 550px) {
  .movie__inner {
    h1 {
      font-size: 2rem;
      width: initial;
      padding-top: 90px;
      text-align: center;
    }

    button {
      right: initial;
      left: 30px;
    }
    .movie__details {
      padding: 30px 20px;
      h3 {
        font-size: 1.2rem;
        span {
          font-size: 1.2rem;
        }
      }
      ul {
        li {
          font-size: 0.8rem;
          line-height: 1rem;
        }
      }
      h4 {
        font-size: 1rem;
      }
      p {
        font-size: 0.9rem;
      }
    }
  }
}
</style>