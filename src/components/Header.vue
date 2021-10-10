<template>
  <header>
    <div class="header--wrapper">
      <RouterLink :to="{ name: 'Home'}">
        <img
          src="/logo.png"
          alt="free_logo" />
      </RouterLink>
      <img
        src="/11.jpg"
        alt="header" />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header--wrapper{
    width: 100%;
    height: 300px;
    position: relative;
    a{
      text-decoration: none;
      color: $color-font;
      img{
        width: 100px;
        height: 100px;
        background-color: rgba(255, 255, 255, .8);
        top:50%;
        left:50%;
        z-index: 2000;
        transform: translate(-50%, -50%);
      }
    }
    img{
        position: absolute;
        width:100%;
        height: 100%;
    }
}
</style>
