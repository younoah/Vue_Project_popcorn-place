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
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  line-height: 1.4;
  
  .app__container {
    background-color: lightgrey;
    flex-grow: 1;
    padding: 0 30px;
  }
}
</style>
