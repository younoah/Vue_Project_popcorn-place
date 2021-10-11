<template>
  <div class="continer">
    <Header class="header" />
    <SearchResults class="content" />
    <Footer class="footer" />
  </div>
</template>

<script>
import Header from '~/components/header/Header';
import Footer from '~/components/Footer';
import SearchResults from '~/components/searchResults/SearchResults';

export default {
  components: {
    Header,
    SearchResults,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.continer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
