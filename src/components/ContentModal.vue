<template>
  <teleport to="body">
    <div
      class="modal"
      @click="toggleModalState">
      <div
        class="modal-inner"
        @click.stop>
        <div
          v-show="currentContent.Poster !== 'N/A'"
          class="poster">
          <img
            :src="highQualityPoster"
            alt="" />
        </div>
        <div class="info">
          <template
            v-for="(value, key) in currentContent"
            :key="key">
            <dl
              v-if="value !== 'N/A'">
              <dt>{{ key }}</dt>
              <dd>{{ value }}</dd>
            </dl>
          </template>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  computed: {
    currentContent() {
      return this.$store.state.content.currentContent;
    },
    highQualityPoster() {
      return this.$store.getters['content/highQualityPoster'];
    }
  },
  methods: {
    toggleModalState() {
      this.$store.commit('content/toggleModalState');
      // this.$store.commit('content/assignState', {
      //   currentContent: {}
      // });
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba($color-background, .8);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  &-inner {
    overflow: auto;
    width: 640px;
    min-height: 470px;
    background-color: $color-background;
    border-radius: 15px;
    padding: 20px;
    border: 1px solid $color-border;
    display: flex;
    gap: 20px;
    .poster {
      border-radius: 16px;
      border: 1px solid $color-border;
      overflow: hidden;
      width: 280px;
      height: 360px;
      flex-shrink: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    dl {
      display: flex;
      width: 100%;
      word-break: break-all;
      font-size: 12px;
      margin-bottom: 10px;
      dt{
        flex-shrink: 0;
        width: 72px;
        font-weight: 700;
      }
    }
  }
}
</style>