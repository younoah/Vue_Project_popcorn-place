<template>
  <li>
    <div class="title">
      {{ movie.Title }}
    </div>
    <div class="year">
      {{ movie.Year }}
    </div>
    <img :src="movie.Poster" />
  </li>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped>
li {
  border: 1px solid black;
}
</style>
