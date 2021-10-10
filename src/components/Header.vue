<template>
  <img
    src="../img/netflixLogo.png"
    alt="logo"
    class="logo"
    @click="$router.push('/')" />
  <RouterView />
</template>
<style lang="scss" scoped>
.logo {
  display: block;
  margin: 50px auto 100px auto;

  &:hover {
    cursor: pointer;
  }

}
</style>