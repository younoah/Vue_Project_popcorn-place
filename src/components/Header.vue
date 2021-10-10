<template>
  <header class="header">
    <div class="header__left">
      <button type="button" class="header__menu">
        <span class="material-icons"> menu </span>
      </button>
      <router-link to="/" class="header__link" @click="goHomePage">
        <h1 class="header__title">Cinephile</h1>
      </router-link>
      <div class="header__description">All the movies you're looking for.</div>
    </div>
    <div class="header__right">
      <router-link to="sign-in">Sign in</router-link>
      <router-link to="sign-up">Sign up</router-link>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    goHomePage() {
      this.$store.commit('initSearchResults');
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 1.5rem;

  &__left {
    display: flex;
    align-items: center;
  }

  &__menu {
    display: none;
  }

  &__title {
    font-family: 'Carter One', cursive;
    font-size: $size-font-xl;
    color: $color-font-title;
    margin-right: 2rem;
  }

  &__description {
    font-size: $size-font-sm;
    font-weight: 500;
    @include flex-align-center;
  }

  &__right > a {
    margin-right: 1rem;
  }
}

@media screen and (max-width: $breakpoint-xs - 1) {
  .header {
    @include flex-align-center;

    &__title {
      font-size: $size-font-lg;
      margin: 0;
    }

    &__description {
      display: none;
    }

    &__right {
      display: none;
    }

    &__menu {
      display: block;
      position: absolute;
      left: 1rem;
      top: 1.2rem;
      margin-right: 1rem;
    }
  }
}

@media screen and (min-width: $breakpoint-xs) and (max-width: $breakpoint-sm - 1) {
  .header {
    @include flex-align-center;

    &__title {
      font-size: $size-font-lg;
      margin: 0;
    }

    &__description {
      display: none;
    }

    &__right {
      display: none;
    }

    &__menu {
      display: block;
      position: absolute;
      left: 1rem;
      top: 1.2rem;
      margin-right: 1rem;
    }
  }
}

@media screen and (min-width: $breakpoint-sm) and (max-width: $breakpoint-md - 1) {
  .header {
    &__right {
      display: none;
    }
  }
}
</style>
