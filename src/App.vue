<template>
  <div class="app__inner">
    <div class="app__header">
      <Header />
    </div>
    <div class="app__page">
      <div class="page__header">
        <SearchMovie />
      </div>
      <div class="page__container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header'
import SearchMovie from '~/components/SearchMovie'
export default {
 components: {
   Header,
   SearchMovie,
 }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
}

.app__inner {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  line-height: 1.4;

  .app__header {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    padding: 30px 0;
  }
  .app__page {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: 30px 0;

    .page__header{
      width: 100%;
      padding: 30px 0;
    }

    .page__container{
      padding: 30px 0;
    }
  }
}
  
</style>