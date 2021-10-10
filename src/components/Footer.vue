<template>
  <footer v-if="!results.length" class="footer">
    <div class="footer__left">© 2021 Cinephile</div>
    <div class="footer__right">
      <router-link to="/app">Get the Cinephile App</router-link>
      <span class="footer__separator">·</span>
      <router-link to="/help">Help</router-link>
      <span class="footer__separator">·</span>
      <router-link to="/index">Site Index</router-link>
      <span class="footer__separator">·</span>
      <router-link to="/advertising">Advertising</router-link>
      <span class="footer__separator">·</span>
      <router-link to="/conditions">Conditions of Use</router-link>
      <span class="footer__separator">·</span>
      <router-link to="/policy">Privacy Policy</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    results() {
      return this.$store.state.results;
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-size: $size-font-sm;
  border-top: 1px solid;
  position: absolute;
  left: 50%;
  width: 95%;
  min-width: 280px;
  bottom: 0;
  transform: translate(-50%);

  &__right {
    display: flex;
    margin: 0 1rem;
  }

  &__image {
    margin-left: 0.2rem;
  }

  &__separator {
    margin: 0 0.5rem;
  }
}

@media screen and (max-width: 837px) {
  .footer {
    flex-direction: column;
    align-items: center;

    &__right {
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    &__right > a {
      margin-top: 1rem;
    }

    &__separator {
      display: none;
    }
  }
}
</style>
