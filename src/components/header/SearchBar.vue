<template>
  <div class="searchbar__wrapper">
    <input
      v-model.trim="searchKeyword"
      type="text"
      class="searchbar__input"
      placeholder="영화를 검색하세요"
      @keyup.enter="searchMovie"
    />
    <button @click="searchMovie">
      <span class="material-icons"> search </span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchKeyword: '',
    };
  },
  methods: {
    searchMovie() {
      console.log('searchMovie!');
    },
  },
};
</script>

<style lang="scss" scoped></style>
