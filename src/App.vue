<template>
  <Header />
  <Search />
  <RouterView />
</template>

<script>
import Header from '~/components/Header';
import Search from '~/components/Search';

export default {
  components: {
    Header,
    Search
  }
};
</script>
