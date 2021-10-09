<template>
  <div
    class="container"
    :class="{ home: $route.path === '/'}">
    <header class="app-header">
      <h1 class="logo">
        <a href="/"><em>OMDb API</em><span>The Open Movie Database</span></a>
      </h1>
      <SearchForm />
    </header>
    <main class="app-main">
      <RouterView />
    </main>
    <footer class="app-footer">
      <p>Copyright © 2021 goum.</p>
    </footer>
  </div>
</template>
<script>
import SearchForm from '~/components/SearchForm';
export default {
  components: {
    SearchForm
  }
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.container {
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
  line-height: 1.3;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

  .app-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    margin-bottom: 72px;
    transition: all .4s ease-in;
    .logo {
      margin-right: 20px;
      em {
        font-size: 40px;
        font-weight: 700;
        letter-spacing: -.05em;
        color: $color-point;
      }
      span {
        display: block;
        margin-top: -10px;
        font-size: 12px;
        letter-spacing: .1em;
        text-indent: 5px;
        color: $color-dark-point;
      }
    }
  }
  &.home {
    .app-header {
      flex-direction: column;
      height: 90vh;
      .logo {
        margin-bottom: 30px;
      }
    }
  }
  .app-main {
    margin-bottom: 72px;
  }
  .app-footer {
    text-align: center;
    color: $color-dark-font;
    font-size: 12px;
  }
}
</style>