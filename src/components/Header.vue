<template>
  <header>
    <h1>
      <a href="/">🎬</a>
    </h1>
    <form>
      <input
        id="search-input"
        placeholder="검색"
        type="text"
        autocomplete="off" />
    </form>
  </header>
</template>

<style lang="scss" scoped>
header {
  min-height: 120px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  text-align: center;

  h1 {
    position: absolute;
  }

  a {
    font-size: 36px;
    text-decoration: none;
  }

  form {
    flex-grow: 1;
  }
}
</style>
