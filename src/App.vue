<template>  
  <div class="app__inner">
    <div class="app__page">
      <Header />
      <div class="page__container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  },
  created() {
    console.log(this.$store.dispatch('movie/searchList'))
  }
}
</script>

<style lang="scss" scoped>
* {
  border: 2px solid green;
  box-sizing: border-box;
}
.app__inner {
  background-color: $color-background;
  color: $color-font;
  display: flex;
  height: 100vh;
  font-size: 14px;
  line-height: 1.4;
  font-family: 'Open Sans', sans-serif;
  .app__page {
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    .page__header {
      height: 80px;
    }
    .page__container {
      flex-grow: 1;
      overflow-y: auto; 
    }
  }
}
</style>
