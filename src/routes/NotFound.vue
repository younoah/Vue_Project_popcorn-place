<template>
  <UserSearchTyping v-if="isInitialize" />
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