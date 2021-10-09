<template>
  <header class="header">
    <div class="header__movie-info">
      <h1>영화 정보</h1>
    </div>
  </header>
  <!-- <img :src="movie.Poster" /> -->
  <main class="main">
    <div class="main__movie-info">
      <div class="preview">
        <div class="preview--poster">
          <img
            :src="movie.Poster"
            alt="movie.Title" />
        </div>
        <div class="preview--info">
          <h2> {{ movie.Title }} </h2>
          <p>상영시간: {{ movie.Runtime }}</p>
          <p>장르: {{ movie.Genre }}</p> 
          <p>배우: {{ movie.Actors }}</p>
          <p>감독: {{ movie.Director }}</p>
          <p>작가: {{ movie.Writer }}</p>
        </div>
      </div>
    </div>
    <div class="main--back-button">
      <RouterLink to="/">
        <button>
          뒤로가기
        </button>
      </RouterLink>
    </div>
  </main>
</template>

<script>
export default {
    data() {
        return {
            movie: {
                Title: '',
                Actors: '',
                Genre: '',
                Runtime: '',
                Writer: '',
                Director: '',
                Poster: ''
            }
        };
    },
    async mounted()  {
        const res = await this.$getMovieInfo({id: this.$route.params.id});
        this.movie = res;
        console.log(this.$route);
    },
    methods: {
        
    }
};
</script>

<style scoped lang="scss">
.header__movie-info {
    h1 {
        width: 80%;
        margin-left: 20px;
        padding-bottom: 20px;
        border-bottom: 2px solid;
    }
}    
.main__movie-info {
    margin-left: 20px;
    width: 80%;
}

.preview {
    display: flex;

    &--poster {
        width: 300px;
        height: 400px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    &--info {
        margin-left: 20px;
        h2 {
            padding-bottom: 6px;
            border-bottom: 1px solid #ddd;
        }
    }
}

.main--back-button{
    display: flex;
    justify-content: center;
    margin: 30px 0px;

    button {
        width: 300px;
        height: 50px;
        border: 1px solid;
        border-radius: 50px;

        background-color: #FF243E;
        color: white;

        cursor: pointer;
    }
}
</style>