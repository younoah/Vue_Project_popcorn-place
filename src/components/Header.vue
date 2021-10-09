<template>
  <header>
    <div class="hambuger-button">
      <span class="material-icons">
        list
      </span>
    </div>
    <div class="page__logo">
      <img
        src="../images/movielogo.png"
        alt="logo"
        @click="$router.push('/')" />
    </div>
    <div class="user-menu">
      <span class="material-icons">
        favorite
      </span>
      <span class="material-icons">
        settings
      </span>
      <span class="material-icons">
        logout
      </span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0 30px;
  

  .material-icons{
      font-size: 40px;
      padding: 10px;
      cursor: pointer;
        &:hover{
        color: $color-button-hover
      }
  }

  .page__logo {
    flex-grow: 1;
    text-align: center;
    cursor: pointer;
    img:hover {
      transform: scale(1.1);
    }
  }

  .user-menu {
    display: flex;
  }
}

</style>