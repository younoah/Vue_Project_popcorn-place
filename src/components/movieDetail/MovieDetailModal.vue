<template>
  <teleport to="body">
    <div v-if="isShowModal" class="modal" @click="closeModal">
      <div class="modal__inner" @click.stop>
        <div class="modal__image-wrap">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg"
            alt="포스터"
            class="modal__image"
          />
        </div>
        <dl class="modal__content">
          <dt class="modal__content__title">📄 영화제목</dt>
          <dd>겨울왕국</dd>
          <dt class="modal__content__title">📅 개봉일</dt>
          <dd>2021.11.11</dd>
          <dt class="modal__content__title">🔢 등급</dt>
          <dd>15세</dd>
          <dt class="modal__content__title">✅ 장르</dt>
          <dd>fantasy</dd>
          <dt class="modal__content__title">🎬 감독</dt>
          <dd>younoah</dd>
          <dt class="modal__content__title">🕴🏻 배우</dt>
          <dd>younoah, younoah</dd>
          <dt class="modal__content__title">📖 줄거리</dt>
          <dd>흥미로운 줄거리</dd>
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
    background-color: white;
    padding: 20px;
    display: flex;
    gap: 2rem;
    border-radius: 1rem;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    dt {
      width: 400px;
    }
  }
}
</style>
