<template>
  <teleport to="body">
    <div v-if="isShowModal" class="modal" @click="toggleModal">
      <h1>movieDetail</h1>
      <div class="modal__inner" @click.stop>
        <div class="modal__image-wrap">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX300.jpg"
            alt="포스터"
            class="modal__image"
          />
        </div>
        <div class="modal__content">
          <span class="modal__content__title"> 📅 영화제목</span>
        </div>
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
};
</script>

<style lang="scss" scoped></style>
