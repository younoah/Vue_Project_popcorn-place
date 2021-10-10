<template>
  <loading
    v-model:active="isLoading"
    opacity="1"
    :can-cancel="true"
    :on-cancel="onCancel"
    :is-full-page="fullPage" />
  <div class="search-form input-group mb-3">
    <input
      v-model="searchWord"
      class="form-control"
      placeholder="검색어를 입력하세요."
      aria-describedby="button-addon2"
      @keyup.enter="enterSearchWord" />
    <button
      class="btn btn-secondary"
      variant="danger"
      @click="enterSearchWord">
      검색
    </button>
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
    components: {
    Loading
  },
  data() {
    return {
      searchWord: '',
      isLoading: false,
      fullPage: true
    }
  },
    methods: {
    async enterSearchWord() {
      this.isLoading = true
      await this.$store.commit('initializeMovieList')
      await this.$store.dispatch('fetchList', {
        searchWord: this.searchWord,
        pageNum: 1
        })
      setTimeout(() => {
        this.isLoading = false
      }, 3000)
    }
  }
}

</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables";
@import "~/assets/scss/_mixins";

@include search-form-fadein;

input {
  font-size: 14px;
  width: 100%;
  padding: 0 auto;
}
</style>