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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Carter+One&display=swap');
@include material-icons;

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  height: 100%;
  font-family: Noto Sans KR, sans-serif;
  @include material-icons;
}

body {
  min-width: 17.5rem;
  height: 100%;
  margin: 0;
  color: $color-font-body;
}

a {
  color: inherit;
  text-decoration: none;
  display: inline-block;
}

b {
  font-weight: bold;
}

input {
  border: none;
}

input:focus {
  outline: none;
}

input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration {
  display: none;
}

button {
  border: 0;
  outline: 0;
  background-color: transparent;
  cursor: pointer;
}
</style>
