<template>
  <div
    class="inner">
    <loading
      v-model:active="isLoading"
      opacity="1"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="fullPage" />
    <div class="title">
      <h1 v-if="$store.getters.movieListLength === 0">
        "{{ searchWord }}"를 찾을 수 없습니다.<br />다시 검색해주세요. 😭
      </h1>
      <h1 v-else>
        "{{ searchWord }}"의 검색 결과입니다. 😎
      </h1>
      <SearchForm />
    </div>
    <div
      class="list-container">
      <ul>
        <li
          v-for="movie in movieList"
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
      <div
        ref="scrollObserver"
        class="scrollObserver"></div>
    </div>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import SearchForm from '~/components/SearchForm'

export default {
  
  components: {
    Loading,
    SearchForm
  },
  data() {
    return {
      pageNum: 2,
      isLoading: false,
      fullPage: true
    }
  },
  computed: {
    searchWord() {
      return this.$store.state.searchWord
    },
    movieList() {
      return this.$store.state.movieList
    }
  },
  mounted() {
    this.initIntersectionObserver()
  },
  methods: {
    async clickMovie(e) {
      const imdbID = e.target.closest('li').id
      this.isLoading = true
      await this.$store.dispatch('fetchMovie', imdbID)
      setTimeout(() => {
                    this.isLoading = false
                }, 5000)
    },
    initIntersectionObserver() {
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.isLoading = true
          this.$store.dispatch('fetchList', {
            searchWord: this.searchWord,
            pageNum: this.pageNum
          })
          setTimeout(() => {
            this.isLoading = false
          }, 1000)
          this.pageNum += 1
        }
      }, {
        threshold: 0.01
      })
      io.observe(this.$refs.scrollObserver)
    },
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_mixins";
@import "~/assets/scss/_variables";

@include my-flex-list;
@include title-fadein;


.title {
  display: inline-block;
  width: 80%;
  padding: 0 auto;
  text-align: center;
}

.scrollObserver {
  height: 100px;
}
  
</style>