<template>
  <div class="inner">
    <div class="like">
      <button
        class="btn btn-outline-secondary"
        @click="likeToggle">
        {{ isLike() ? 'Dislike' : 'Like' }}
      </button>
    </div>
    <div class="info">
      <div class="info-top">
        <img
          :src="selectedMovie.Poster !== 'N/A'
            ? selectedMovie.Poster.replace('300', '700')
            : 'https://westsiderc.org/wp-content/uploads/2019/08/Image-Not-Available.png'" />
        <div class="info-top-text">
          <div class="ratings">
            <span
              v-for="(rating, index) in selectedMovie.Ratings"
              :key="index"
              :class="ratingClassList[index]">
              {{ rating["Source"] }} 👑 {{ rating["Value"] }}
            </span>
          </div>
          <h1>{{ selectedMovie.Title }}</h1>
          <div class="list-group">
            <div
              v-for="(info, index) in movieInfoList"
              :key="index"
              class="list-group-item list-group-item-action">
              <span class="info-name">{{ info }} : </span>{{ selectedMovie[info] }}
            </div>
          </div>
        </div>
      </div>
      <div class="info-bottom card bg-light mb-3">
        <div class="card-header info-name">
          Plot
        </div>
        <div class="card-body">
          {{ selectedMovie.Plot }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      like: false,
      ratingClassList: ['badge rounded-pill bg-primary', 'badge rounded-pill bg-secondary', 'badge rounded-pill bg-dark'],
      movieInfoList: ['Released', 'Runtime', 'Genre', 'Director', 'Actors']
    }
  },
  computed: {
    selectedMovie() {
      return this.$store.state.selectedMovie
    }
  },
  methods: {
    likeToggle() {
      this.like = !this.like
      if(this.like) { // true
        this.$store.commit('addLikeMovieList', this.selectedMovie)
      } else {
        this.$store.commit('removeLikeMovieList', this.selectedMovie.imdbID)
      }
    },
    isLike() {
      this.$store.dispatch('isLike', this.selectedMovie.imdbID).then(value => value ? this.like=true : this.like=false)
      return this.like
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables";
@import "~/assets/scss/_mixins";

.inner {
  position: relative;
  padding: 0 $my-size;

  img {
    width: 300px;
    height: 430px;
  }

  .like {
    display: inline;
    position: absolute;
    top: calc(-1 * $my-size);
    right: $my-size;
    
    label {
      height: 32px;
      line-height: 1;
    }
  }

  .info-top {
    display: flex;
    @include my-margin-bottom;
  }

  .info-top-text {
    @include my-margin-left(calc($my-size-sm * 3));

    h1 {
      @include my-margin-bottom;
    }
  }

  .info-name {
    font-weight: 700;
  }

  .ratings {
    @include my-margin-bottom;
    span {
      margin: $my-size-sm;
    }
  }

}
</style>