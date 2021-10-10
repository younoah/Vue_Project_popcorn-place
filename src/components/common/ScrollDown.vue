<template>
  <div class="scroll-down">
    <svg height="30" width="10">
      <circle class="scroll-down-p1" cx="5" cy="15" r="2" />
      <circle class="scroll-down-p1" cx="5" cy="15" r="2" />
    </svg>
  </div>
</template>

<style lang="scss" scoped>
.scroll-down {
  width: 30px;
  height: 46px;
  margin: 8px auto;
  text-align: center;
  border: 2px solid colors.$brand-light;
  border-radius: 30px;

  &-p1,
  &-p2 {
    animation-name: scrolldown;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    fill: colors.$brand-light;
  }

  &-p2 {
    animation-delay: 0.75s;
  }
}

@keyframes scrolldown {
  0% {
    transform: translate(0, -0.8rem);
    opacity: 0;
  }

  50% {
    transform: translate(0, 0);
    opacity: 1;
  }

  100% {
    transform: translate(0, 0.8rem);
    opacity: 0;
  }
}
</style>
