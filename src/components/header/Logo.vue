<template>
  <h1 class="logo">
    <a href="/"><em>POPCORN</em><span>PLACE</span></a>
  </h1>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.logo {
  a {
    text-decoration: none;
    display: flex;
    gap: 20px;
    font-size: 50px;
  }
  em,
  span {
    color: royalblue;
  }
}
</style>
