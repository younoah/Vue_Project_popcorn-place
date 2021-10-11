<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/about">About</RouterLink>
  <RouterLink to="/documents/333?name=Yoonho&age=27&email=yonoah@abc.com"
    >Documents ID</RouterLink
  >
  <RouterLink
    :to="{
      name: 'docsId',
      params: { id: '7777' },
      query: { name: 'Yoonho', age: 27, email: 'yonoah@abc.com' },
    }"
    >Documents ID</RouterLink
  >
  <button @click="$router.push('/')">Home</button>
  <button @click="$router.push('/about')">About</button>
  <button @click="$router.push({ name: 'home' })">Home</button>
  <button @click="$router.push({ name: 'about' })">About</button>
  <button v-if="!isLoggedIn" @click="logIn">LogIn</button>
  <button v-else @click="logOut">LogOut</button>
  <RouterView />
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.state.user.isLoggedIn;
    },
  },
  created() {
    this.$store.dispatch('user/initialize');
  },
  methods: {
    logIn() {
      this.$router.push('/login');
    },
    logOut() {
      this.$store.dispatch('user/logOut');
    },
  },
};
</script>

<style lang="scss" scoped></style>
