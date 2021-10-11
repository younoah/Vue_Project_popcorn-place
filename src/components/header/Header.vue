<template>
  <header class="header">
    <Logo class="header__logo" />
    <SearchBar class="header__searchbar" />
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

<style lang="scss" scoped>
.header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 48px 0;
  &__logo {
    margin: 32px auto;
  }
}
</style>
