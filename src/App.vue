<template>
  <div class="app__container">
    <div
      class="app__search"
      :class="{ 'loaded': isInitialize }">
      <Search />
    </div>
    <div class="app__inner">
      <div class="app__page">
        <div class="page__container">
          <RouterView />
        </div>
      </div>
    </div>
    <div
      v-show="isLoading"
      class="loading">
      <img
        src="https://c.tenor.com/QNgziYe6ocQAAAAC/mickey-mouse-disney.gif"
        alt="">
    </div>
  </div>
</template>

<script>
import Search from '~/components/Search'

export default {
  components: {
    Search
  },
  computed: {
    isLoading() {
      return this.$store.state.searchMovie.isLoading
    },
    isInitialize() {
      return this.$store.state.searchMovie.isInitialize
    }
  }
}
</script>

<style lang="scss" scoped>
.app__container {
  font-family: 'Noto Sans KR', sans-serif;
  font-family: 'Roboto', sans-serif;
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: #FEFEFE;
  
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #141D3C;

  .app__search {
    transition: .6s ease;
    transform: translateY(40vh);
    &.loaded {
      position: relative;
      transform: translateY(0);
    }
  }

  .app__inner {
    width: 90%;
    margin: 0 auto;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-flow: column;


    .app__page {
      flex-grow: 1;
      display: flex;
      flex-flow: column;

      .page__container {
        flex-grow: 1;
      }
    }
  }
}
.loading {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(black, .2);
  img {
    width: 30%;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }
}
</style>