<template>
  <div class="app-inner">
    <Nav />
    <RouterView />
  </div>
</template>

<script>
import Nav from '~/components/Nav'
export default {
    components: {
        Nav
    }   
}
</script>

<style lang="scss" scoped>
@import "~bootswatch/dist/litera/variables";
@import "~bootstrap/scss/bootstrap";
@import "~bootswatch/dist/litera/bootswatch";

#app {
  height: 100%;
  width: 100%;
}

.app-inner {
  min-height: 100vh;
  width: 60%;

  margin: 0 auto;
  padding: 5% 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #ffffff;
}
</style>