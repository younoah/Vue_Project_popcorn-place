<template>
  <div class="inner">
    <div class="title">
      <h1>Like Movies 🎬</h1>
      <h2 v-if="$store.getters.likeMovieList === 0">
        LikeList에 담긴 영화가 없습니다. 😭
      </h2>
    </div>
    <div
      v-if="$store.getters.likeMovieList !== 0"
      class="list-container">
      <ul>
        <li
          v-for="movie in likeMovieList"
          :id="movie.imdbID"
          :key="movie.imdbID"
          class="card border-secondary mb-3 shadow p-3 bg-body rounded"
          @click="clickMovie">
          <img
            :src="movie.Poster !== 'N/A'
              ? movie.Poster
              : 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'" />
          <h2>{{ movie.Title }} <span>({{ movie.Year }})</span></h2>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    computed: {
        likeMovieList() {
            return this.$store.state.likeMovieList
        }
    },
    methods: {
        clickMovie(e) {
            const imdbID = e.target.closest('li').id
            this.$store.dispatch('fetchMovie', imdbID)
        },
    }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_mixins";
@import "~/assets/scss/_variables";

@include my-flex-list;
@include title-fadein;
</style>