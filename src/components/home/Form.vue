<template>
  <form class="form d-flex justify-content-center gx-5">
    <input
      v-model="title"
      type="text"
      class="
        form__input
        d-block
        col-9
        my-5
        py-md-2 py-lg-3
        col-lg-8
        rounded-pill
        border-0
      "
      placeholder="영화 제목을 입력하세요!"
      @input="onChangeText"
    />
    <button
      class="
        form__btn
        px-5
        my-5
        py-md-2 py-lg-3
        flex-shrink-0
        btn btn-dark
        rounded-pill
        ms-4
      "
      @click.prevent="onSubmit"
    >
      click!
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: '',
    };
  },
  computed: {},
  methods: {
    onSubmit() {
      this.$store.dispatch('movie/getMovies', {
        title: this.title.trim(),
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.form {
  .form__input {
    padding-left: 2rem;
  }
}
</style>
