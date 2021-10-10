<template>
  <Header />
  <div id="inner">
    <RouterView />
  </div>
</template>

<script>
import Header from '@/components/common/Header';
export default {
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
html {
  font-size: 16px;
}
body {
  height: 100vh;
}
#inner {
  margin-top: 6rem;
  font-family: 'Roboto', sans-serif;
  min-height: calc(100vh - 6rem);
  background-color: $green-700;
}
</style>
