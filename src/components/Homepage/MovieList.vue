<template>
  <main class="main">
    <ul class="main__movie-list">
      <li
        v-for="movie in movieList"
        :key="movie.imdbID"
        class="item">
        <RouterLink
          :to="routePath(movie.imdbID)">
          <img
            class="item--poster"
            :src="movie.Poster"
            :alt="movie.Title" />
          <div class="item--movie-info">
            <h2>{{ movie.Title }}</h2>
            <p>작품 년도: {{ movie.Year }}</p>
            <p>영화 정보 보기</p>
          </div>
        </RouterLink>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  computed: {
    movieList() {
      return this.$store.state.movieList;
      }
  },
  methods: {
      routePath(id) {
          return `/movie/info/${id}`;
      }
  }
};
</script>

<style scoped lang="scss">
.main__movie-list {
    display: grid;
    grid-template-columns: repeat(2, 350px);
    grid-auto-rows: 450px;
    justify-content: center;
    grid-gap: 10px;
    
    margin: 0px;
    padding-top: 10px;
}

.item {
    position: relative;
    cursor: pointer;
    list-style: none;
    
    :hover {
        .item--movie-info {
            position: absolute;
            left: 0;
            top: 0;

            display: flex;
            flex-direction: column;  
            justify-content: space-evenly;
            align-items: center;
            
            box-sizing: border-box;
            width: 100%;
            height: 100%;

            background-color: rgba(0,0,0,0.7);
            color: white;
        
            h2 {
                margin-top: 50px;
                color: yellow;
                text-align: center;
            }

            p {
                text-align: center;
            }
        }
    }

    &--poster {
        width: 100%;
        height: 100%;
    }
    
    &--movie-info {
        display: none;
    }
    
}

</style>