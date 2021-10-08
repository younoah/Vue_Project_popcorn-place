<template>
  <ul>
    <li
      v-for="movie in movies"
      :key="movie.imdbID"
      :class="movie.imdbID"
      @click="click">
      <img
        :src="movie.Poster"
        :alt="movie.Title" />
      <div class="movie-info">
        <h2>{{ movie.Title }}</h2>
        <p>작품 년도: {{ movie.Year }}</p>
        <p>영화 정보 보기</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
    props:{
        movies: {
            type: Array,
            default: () => ([])
        }
    },
    methods: {
        click(key) {
            console.log(this);
            console.log(key);
        }
    }
};
</script>

<style scoped lang="scss">
ul {
    display: grid;
    grid-template-columns: repeat(2, 350px);
    grid-auto-rows: 450px;
    justify-content: center;
    grid-gap: 10px;
    
    margin: 0px;
    padding-top: 10px;
}

li {
    position: relative;
    cursor: pointer;
    list-style: none;
    
    img {
        width: 100%;
        height: 100%;
    }
    
    .movie-info {
        position: absolute;
        left: 0;
        top: 0;

        display: none;
        width: 100%;
        height: 100%;

        background-color: rgba(0,0,0,0.7);
        color: white;
    }

    &:hover{
        .movie-info{
            display: flex;
            flex-direction: column;  
            justify-content: space-evenly;
            align-items: center;
            
            box-sizing: border-box;

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
}
</style>