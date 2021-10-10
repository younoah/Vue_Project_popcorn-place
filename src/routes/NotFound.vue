<template>
  <section>
    <h1 class="title">
      404 Page Not Found! 🎥
    </h1>
  </section>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/_mixins";
@import "~/assets/scss/_variables";

section {
  @include title-fadein;
  padding: 100px 0 200px;
  text-align: center;
  h1 {
    font-size: 60px;
    font-weight: 700;
  }
}
</style>