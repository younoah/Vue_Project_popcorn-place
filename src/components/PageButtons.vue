<template>
  <nav
    v-if="isInitialize"
    aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li
        v-if="currentPage !== 2 && !isFirst()"
        class="page-item"
        @click="firstPage">
        <button
          class="page-link"
          href="#">
          1
        </button>
      </li>
      <li
        v-if="currentPage !== 2 && !isFirst()" 
        class="page-item disabled">
        <span class="page-link">···</span>
      </li>
      <li
        v-if="!isFirst()"
        class="page-item"
        @click="previousPage">
        <button
          class="page-link"
          href="#">
          {{ currentPage - 1 }}
        </button>
      </li>
      <li
        class="page-item active"
        aria-current="page">
        <span class="page-link">{{ currentPage }}</span>
      </li>
      <li
        v-if="!isLast()"
        class="page-item"
        @click="nextPage">
        <button
          class="page-link"
          href="#">
          {{ currentPage + 1 }}
        </button>
      </li>
      
      <li
        v-if="currentPage !== $store.state.searchMovie.maxPage - 1 && !isLast()" 
        class="page-item disabled">
        <span class="page-link">···</span>
      </li>
      <li
        v-if="currentPage !== $store.state.searchMovie.maxPage - 1 && !isLast()"
        class="page-item"
        @click="lastPage">
        <button
          class="page-link"
          href="#">
          {{ $store.state.searchMovie.maxPage }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    currentPage() {
      return parseInt(this.$route.query.page, 10)
    },
    isInitialize() {
      return this.$store.state.searchMovie.isInitialize
    }
  },
  methods: {
    isFirst() {
      return parseInt(this.$route.query.page, 10) === 1
    },
    isLast() {
      return parseInt(this.$route.query.page, 10) === parseInt(this.$store.state.searchMovie.maxPage, 10)
    },
    nextPage() {
      this.$store.dispatch('searchMovie/readMovieLists', {
        s: this.$store.state.searchMovie.userTyping,
        page: this.$store.state.searchMovie.currentPage + 1
      })
    },
    previousPage() {
      this.$store.dispatch('searchMovie/readMovieLists', {
        s: this.$store.state.searchMovie.userTyping,
        page: this.$store.state.searchMovie.currentPage - 1
      })
    },
    firstPage() {
      this.$store.dispatch('searchMovie/readMovieLists', {
        s: this.$store.state.searchMovie.userTyping,
        page: 1
      })
    },
    lastPage() {
      this.$store.dispatch('searchMovie/readMovieLists', {
        s: this.$store.state.searchMovie.userTyping,
        page: this.$store.state.searchMovie.maxPage
      })
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  margin: 40px 0 80px;
}
</style>