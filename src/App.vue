<template>
  <router-view />
</template>

<style lang="scss">
html,
body {
  font-size: 62.5%;
}

html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  height: 100vh;
  margin: 0;
  color: white;
  background-color: colors.$bg-color;
}
</style>
