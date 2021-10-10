<template>
  <div class="loading">
    <div class="loading__overlay"></div>
    <img src="../../static/loading.gif" alt="" class="loading__image" />
  </div>
</template>

<style lang="scss" scoped>
.loading {
  @include init-loading-position;
  z-index: 2;

  &__overlay {
    @include init-loading-position;
    opacity: 0.7;
    background-color: #141414;
  }

  &__image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    opacity: 0.7;
  }
}
</style>
