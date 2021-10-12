<template>
  <div class="continer">
    <Header class="header" />
    <SearchResults class="content" />
    <Footer class="footer" />
    <MovieDetailModal />
    <Spinner />
  </div>
</template>

<script>
import Header from '~/components/header/Header';
import SearchResults from '~/components/searchResult/SearchResult';
import Footer from '~/components/footer/Footer';
import MovieDetailModal from '~/components/movieDetail/MovieDetailModal';
import Spinner from '~/components/common/Spinner';

export default {
  components: {
    Header,
    SearchResults,
    Footer,
    MovieDetailModal,
    Spinner,
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
