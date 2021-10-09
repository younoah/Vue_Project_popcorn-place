<template>
  <UserSearchTyping v-if="isInitialize" />
  <div
    v-if="isInitialize"
    class="no-result">
    <img
      src="https://c.tenor.com/AO8Y6Jvq0P8AAAAi/donald-duck-no.gif"
      alt="no result">
  </div>
</template>

<script>
import UserSearchTyping from '~/components/UserSearchTyping'

export default {
  components: {
    UserSearchTyping
  },
  computed: {
    isInitialize() {
      return this.$store.state.searchMovie.isInitialize
    }
  }
}
</script>

<style lang="scss" scoped>
.no-result {
  text-align: center;
  img {
    animation:.6s ease .6s normal forwards 1 fadein;
    opacity:0
  }
}

@keyframes fadein{
  0% {
    opacity:0
  }
  99% {
    opacity:0
  }
  100% {
    opacity:1
  }
}
</style>