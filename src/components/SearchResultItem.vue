<template>
  <li
    class="result-item"
    @click="readContentDetail(), toggleModalState()">
    <div class="item-poster">
      <img
        v-if="content.Poster !== 'N/A'"
        :src="content.Poster"
        alt="" />
      <span
        v-else
        class="material-icons">
        image_not_supported
      </span>
    </div>
    <div class="item-info">
      <span>{{ content.Type }} | {{ content.Year }}</span>
      <em>{{ content.Title }}</em>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    async readContentDetail() {
      await this.$store.dispatch('content/readContentDetail', {
        contentId: this.content.imdbID
      });
    },
    toggleModalState() {
      this.$store.commit('content/toggleModalState');
    }
  }
};
</script>

<style lang="scss" scoped>
.result-item {
  position: relative;
  width: calc(20% - 16px);
  height: 290px;
  overflow: hidden;
  border: 1px solid $color-border;
  border-radius: 5px; 
  box-sizing: border-box;
  transition: all .3s ease;
  &:hover {
    transform: scale(1.05);
    &::after {
      content: "";
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 3px solid $color-point;
      box-sizing: border-box;
      cursor: pointer;
    }
  }
  a {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    
  }
  .item-poster {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    span {
      display: block;
      margin-top: -50%;
      font-size: 110px;
      color: $color-dark-font;
    }
  }
  .item-info {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 40%;
    padding: 50px 12px 0;
    background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 40%);
    color: $color-icon;
    box-sizing: border-box;
    span {
      display: block;
      margin-bottom: 3px;
      font-size: 12px;
    }
    em {
      font-weight: 700;
      color: $color-icon;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>