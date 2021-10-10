<template>
  <div class="inner">
    <h1>Search My Movie🎬</h1>
    <SearchForm />
  </div>
</template>

<script>
import SearchForm from '~/components/SearchForm'

export default {
  components: {
    SearchForm
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_mixins";
@import "~/assets/scss/_variables";

@include nav-margin-bottom;
@include title-fadein;
h1 {
  @include my-margin-bottom;
}
</style>