<template>
  <div class="continer">
    <Header class="header" />
    <SearchResults class="content" />
    <Footer class="footer" />
    <MovieDetailModal />
  </div>
</template>

<script>
import Header from '~/components/header/Header';
import SearchResults from '~/components/searchResult/SearchResult';
import Footer from '~/components/footer/Footer';
import MovieDetailModal from '~/components/movieDetail/MovieDetailModal';

export default {
  components: {
    Header,
    SearchResults,
    Footer,
    MovieDetailModal,
  },
};
</script>

<style lang="scss" scoped>
.continer {
  display: flex;
  flex-direction: column;
  // align-items: center;
}
</style>
