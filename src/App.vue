<template>
  <Header />
  <Search />
  <RouterView />
  <Footer />
</template>

<script>
import Header from '~/components/Header';
import Search from '~/components/Search';
import Footer from '~/components/Footer';

export default {
  components: {
    Header,
    Search,
    Footer
  }
};
</script>
