<template>
  <nav>
    <div
      class="home"
      @click="home">
      <div class="movie-icon"></div>
      Junhyeong's Movie Finder
    </div>
    <form
      @submit.prevent="search">
      <span class="material-icons search">
        search
      </span>
      <input
        v-model="movieTitle"
        placeholder="Enter the movie title."
        type="text">
    </form>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      movieTitle: '',
    }
  },
  methods: {
    search() {
      if (this.movieTitle?.replaceAll(' ', '')) {
        this.$store.dispatch('searchMovie/readMovieLists', {
          s: this.movieTitle,
          page: 1
        })
      }
    },
    home() {
      this.$router.push('/')
      this.$store.dispatch('searchMovie/backToHome')
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  padding: 20px 120px 20px 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: darken(#141D3C, 7%);

  @media (max-width: 1200px) {
    flex-flow: column;
    gap: 20px;
    input {
      margin-bottom: 20px;
    }
  }

  .home {
    color: #e9ecef;
    font-size: 36px;
    font-weight: 700;
    padding: 12px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    flex-shrink: 0;
    
    .movie-icon {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-right: 12px;
      background-image: url("https://images.unsplash.com/photo-1608889335941-32ac5f2041b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80");
      background-size: cover;
      border: 2px solid #fff;
    }
  }
  form {
    display: flex;
    align-items: center;
    gap: 12px;
    span {
      font-size: 32px;
    }
    input {
      color: #e9ecef;
      height: 50px;
      width: 400px;
      background-color: lighten(#141D3C, 7%);
      border: none;
      outline: none;
      border-radius: 16px;
      padding: 0 12px;
    }
  }
}

@media (max-width: 800px) {
  nav {
    padding: 20px 40px;

    .home {
      font-size: 1.5rem;
      white-space: nowrap;

      .movie-icon {
        width: 60px;
        height: 60px;
      }
    }
    form {
      input {
        margin: 0;
        width: 250px;
      }
    }
  }
}
@media (max-width: 550px) {
  nav {
    padding: 20px;

    .home {
      font-size: 1.2rem;
      .movie-icon {
        width: 40px;
        height: 40px;
      }
    }
    form {
      input {
        width: 200px;
      }
    }
  }
}
</style>