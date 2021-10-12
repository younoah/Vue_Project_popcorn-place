<template>
  <form class="searchbar" @submit.prevent>
    <input
      v-model.trim="searchKeyword"
      type="text"
      class="searchbar__input"
      placeholder="영화를 검색하세요"
      @keyup.enter="searchMovie"
    />
    <button @click="searchMovie" class="searchbar__button">
      <span class="searchbar__button__icon"> 🔍 </span>
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: '',
    };
  },
  methods: {
    async searchMovie() {
      if (!this.searchKeyword) return;
      console.log('searchMovie!', this.searchKeyword);
      this.$store.commit('assignState', { isLoading: true });
      await this.$store.dispatch('getMovies', { keyword: this.searchKeyword });
      this.$store.commit('assignState', { isLoading: false });
    },
  },
};
</script>

<style lang="scss" scoped>
.searchbar {
  border-radius: 12px;
  padding: 0 18px;
  box-shadow: 0px 0.5rem 1.25rem rgb(0 0 0 / 16%);
  &__input {
    font-size: 18px;
    width: 50vw;
    height: 44px;
    padding: 10px;
    border: none;
    &:focus {
      outline: none;
    }
  }
  &__button {
    background: none;
    border: none;
    cursor: pointer;
  }
}
</style>
