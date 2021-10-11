<template>
  <h1>Hello.vue</h1>
  <div>{{ message }}</div>
  <div>{{ count }}</div>
  <button @click="increaseCount">count up!</button>
  <button @click="decreaseCount">count down!</button>
  <button @click="fetchTodo">fetch Todo</button>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    // 일반적인 방식
    // message() {
    //   return this.$store.state.message.message;
    // },
    // count() {
    //   return this.$store.state.count.count;
    // },

    // vuex의 map 함수 방식
    ...mapState('message', ['message']),
    ...mapState('count', ['count']),
  },
  methods: {
    // 일반적인 방식
    // increaseCount() {
    //   this.$store.commit('count/increaseCount');
    // },
    // decreaseCount() {
    //   this.$store.commit('count/decreaseCount');
    // },
    // fetchTodo() {
    //   this.$store.dispatch('message/fetchTodo');
    // },

    // vuex의 map 함수 방식
    ...mapMutations('count', ['increaseCount', 'decreaseCount']),
    ...mapActions('message', ['fetchTodo']),
  },
};
</script>

<style lang="scss" scoped>
h1 {
  color: red;
}
</style>
