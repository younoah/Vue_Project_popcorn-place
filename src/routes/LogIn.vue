<template>
  <div>
    <form @submit.prevent>
      <input v-model="userId" type="text" placeholder="enter yourt ID" />
      <input
        v-model="userPw"
        type="password"
        placeholder="enter yourt PassWord"
      />
      <button @click="logIn">로그인</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: '',
      userPw: '',
    };
  },
  methods: {
    logIn() {
      this.$store.dispatch('user/logIn', {
        id: this.userId,
        pw: this.userPw,
      });
    },
  },
};
</script>

<style lang="sass" scoped></style>
