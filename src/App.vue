<template>
  <div class="app__wrapper">
    <Header />
    <div class="content">
      <RouterView />
    </div>
    <Loading />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Loading from '~/components/Loading'

export default {
  components: {
    Header,
    Loading
  }
}
</script>

<style lang="scss" scoped>

  .app__wrapper {
    @include flexbox($ai: null);
    flex-direction: column;
    color: $COLOR_PRIMARY;
    font-size: 16px;
    font-family: 'Noto Sans KR', sans-serif;
  }

  .content {
    padding-top: $HEADER_HEIGHT;
    flex-grow: 1;
  }

  
</style>