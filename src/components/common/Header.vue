<template>
  <header
    id="header"
    class="
      d-flex
      fixed-top
      align-items-center
      px-4
      py-4
      bg-dark
      text-white
    "
    @click="$router.push('/')"
  >
    <div
      class="header__logo logo d-flex align-items-center"
    >
      <div class="logo__img-box">
        <img src="favicon.ico" alt="JengYoung Movie" />
      </div>
      <span class="logo__name">JengYoung Movie</span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
#header {
  .header__logo {
    display: flex;
    width: 100%;
    &:hover {
      cursor: pointer;
    }
    .logo__img-box {
      /* width: 2rem; */
      height: 2rem;
      img {
        height: 100%;
      }
    }
    .logo__name {
      padding-left: 0.5rem;
      flex-shrink: 0;
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: -2px;
    }
  }
}
</style>
