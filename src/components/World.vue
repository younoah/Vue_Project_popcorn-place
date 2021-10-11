<template>
  <h1>World.vue</h1>
  <div>{{ reversedMessage }}</div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    // 일반적인 방식
    // reversedMessage() {
    //   return this.$store.getters['message/reversedMessage'];
    // },

    // vuex의 map 함수 방식
    ...mapGetters('message', ['reversedMessage']),
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: royalblue;
}
</style>
