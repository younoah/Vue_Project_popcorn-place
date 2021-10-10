<template>
  <div class="app__inner">
    <Header />
    <div class="app__container">
      <RouterView />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'

export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>

.app__inner {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: $font-family;
  font-size: 14px;
  line-height: 1.4;
  
  .app__container {
    flex-grow: 1;
    padding: 110px 60px 40px;
  }
}
</style>
