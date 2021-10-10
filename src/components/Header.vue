<template>
  <header>
    <div class="logo">
      MINFLIX
    </div>
    <div class="search">
      <form class="search__form">
        <input type="text" />
      </form>
      <div class="search__action">
        <span class="material-icons">
          search
        </span>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
* {
  outline: 1px solid lightgreen;
}

header {
  display: flex;
  align-items: center;
  padding: 0 14px;
  .logo {
    color: $color-logo;
    font-weight: 700;
  }
  .search {
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 14px;

    &__form {
      display: flex;
      input {
        
      }
    }

    &__action {
      display: flex;
      align-items: center;
    }
  }
}
</style>
