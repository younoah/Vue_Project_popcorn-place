<template>
  <teleport to="body">
    <div v-if="isShowModal" class="modal" @click="closeModal">
      <div class="modal__inner" @click.stop>
        <div class="modal__image-wrap">
          <img :src="currentMovie.Poster" alt="포스터" class="modal__image" />
        </div>
        <dl class="modal__content">
          <dt class="modal__content__title">📄 영화제목</dt>
          <dd>{{ currentMovie.Title }}</dd>
          <dt class="modal__content__title">📅 개봉일</dt>
          <dd>{{ currentMovie.Released }}</dd>
          <dt class="modal__content__title">✅ 장르</dt>
          <dd>{{ currentMovie.Genre }}</dd>
          <dt class="modal__content__title">🎬 감독</dt>
          <dd>{{ currentMovie.Director }}</dd>
          <dt class="modal__content__title">🕴🏻 배우</dt>
          <dd>{{ currentMovie.Actors }}</dd>
          <dt class="modal__content__title">📖 줄거리</dt>
          <dd>{{ currentMovie.Plot }}</dd>
        </dl>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  computed: {
    isShowModal() {
      return this.$store.state.isShowModal;
    },
    currentMovie() {
      return this.$store.state.currentMovie;
    },
  },
  methods: {
    closeModal() {
      console.log('closeModal!!');
      this.$store.commit('assignState', { isShowModal: false });
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(black, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  &__inner {
    max-width: 80vw;
    max-height: 60vh;
    background-color: white;
    padding: 32px;
    display: flex;
    gap: 2rem;
    border-radius: 1rem;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    dt {
      width: 400px;
    }
  }
}

@media screen and (max-width: $breakpoint-lg) {
  .modal {
    &__inner {
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
