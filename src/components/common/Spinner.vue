<template>
  <teleport to="body">
    <div v-if="isLoading" class="sppiner-wrap">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>

<style lang="scss" scoped>
.sppiner-wrap {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
}
.spinner-border {
  width: 4vw;
  height: 4vw;
  font-size: 2vw;
}
</style>
