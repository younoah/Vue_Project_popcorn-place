<template>
  <h1 class="header">
    More Information
  </h1>
  <ul class="movie-moreinfo">
    <li
      v-for="i in moreInfomation"
      :key="i"
      class="movie-moreinfo-li">
      <img
        class="movie-moreinfo-poster"
        :src="`${i.Poster}`" />
      <div class="movie-moreinfo-detail">
        <span>제목: {{ i.Title }}</span><br /><br />
        <span>개봉일: {{ i.Released }}</span><br /><br />
        <span>작가: {{ i.Writer }}</span><br /><br />
        <span>개봉년도: {{ i.Year }}</span><br /><br />
        <span>감독: {{ i.Director }}</span><br /><br />
        <span>주연 배우: {{ i.Actors }}</span><br /><br />
        <span>장르: {{ i.Genre }}</span><br /><br />
        <span>수상: {{ i.Awards }}</span><br /><br />
        <span>박스오피스: {{ i.BoxOffice }}</span><br /><br />
        <span>DVD 출시일: {{ i.DVD }}</span>
      </div>
    </li>
  </ul>
  <button
    class="movie-moreinfo-prev"
    @click="$router.push({name:'Movie'})">
    ◀뒤로가기
  </button>
</template>

<script>

export default {
    computed: {
        moreInfomation() {
            const moreInfo = this.$store.state.movie.moreInfomation
            return moreInfo
        }
    },
    async created() {
        await this.$store.dispatch('movie/readMovieInfo', {
            id: this.$route.params.id
        })
    }
}
</script>
<style lang="scss" scoped>
.header {
    color: white;
    padding-top: 10px;
    padding-left: 40px;
    margin: 0px
}

.movie-moreinfo-li {
    display: flex;

    .movie-moreinfo-poster {
        margin-right: 30px;
    }

    .movie-moreinfo-detail {
        padding: 10px;
        color: white;
    }
}

.movie-moreinfo-prev {

    margin-left: 30px;
    font-size: 20px;
    border: none;
    background-color: black;
    color: white;

    &:hover {
        color: royalblue;
    }
}
</style>