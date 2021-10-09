<template>
  <section>
    <UserSearchTyping />
    <ul>
      <template
        v-for="movie in movieLists.Search"
        :key="movie.imdbID">
        <li
          @click="movieDetail(movie)">
          <img
            :src="movie.Poster !== 'N/A'
              ? movie.Poster.replace('300', '700')
              : 'https://allmovies.tube/assets/img/no-poster.png'"
            :alt="movie.Title">
          <div class="content">
            {{ movie.Title }}
            <span class="badge rounded-pill bg-dark">{{ movie.Year }}</span>
          </div>
        </li>
      </template>
    </ul>
  </section>
  <PageButtons />
</template>

<script>
import PageButtons from '~/components/PageButtons'
import UserSearchTyping from '~/components/UserSearchTyping'

export default {
  components: {
    PageButtons,
    UserSearchTyping
  },
  computed: {
    movieLists() {
      return this.$store.state.searchMovie.movieLists
    }

  },
  methods: {
    async movieDetail(movie) {
      const { Title, imdbID } = movie
      await this.$store.dispatch('searchMovie/readMovieDetails', {
        i: imdbID
      })

      this.$router.push({
        name: 'MovieDetail',
        query: {
          Title
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    gap: 20px;
    margin-top: 20px;

    @media (min-width: 2000px) {
      display: flex;
      flex-flow: row wrap;
      li {
        width: 250px;
      }
    }
    @media (max-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
    @media (max-width: 800px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 450px) {
      grid-template-columns: repeat(1, 0.8fr);
    }

    li {
      background-color: rgba(black, .2);
      border-radius: 12px;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: flex-end;
      position: relative;
      box-sizing: border-box;
      padding: 20px;
      gap: 8px;
      font-size: 1rem;
      img {
        width: 100%;
        height: 100%;
        transition: all .25s;
      }

      &:hover {
        cursor: pointer;
        img {
          transform: translateY(-10px);
        }
      }
    }
  }
}

.content {
  text-align: center;
  .badge {
    margin: 5px;
  }
}
</style>