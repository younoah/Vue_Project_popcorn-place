<template>
  <Header />
</template>
<script>
import Header from '~/components/Header'
export default {
  components:{
    Header
  },
}
</script>
<style lang="scss">
@import "scss/color";
body {
  background-color: $color-page-background;
  color:$color-text;
}
</style>