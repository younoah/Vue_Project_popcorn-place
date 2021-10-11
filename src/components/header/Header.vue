<template>
  <header class="header">
    <Logo />
    <SearchBar />
  </header>
</template>

<script>
import Logo from './Logo';
import SearchBar from './SearchBar';

export default {
  components: {
    Logo,
    SearchBar,
  },
};
</script>

<style lang="scss" scoped></style>
