<template>
  <header class="header">
    <slot name="header" />
  </header>
  <main class="main">
    <slot name="main" />
  </main>
</template>
<style lang="scss" scoped>
.header,
.main {
  display: flex;
  justify-content: center;
  max-width: 80%;
  margin: 1.6rem auto;
}
</style>
