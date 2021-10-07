<template>
  <header>
    <div class="input-group mb-3 search">
      <div>
        <input
          v-model="searchValue"
          type="text"
          class="form-control"
          placeholder="검색할 영화 제목"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          @keyup.enter="onSubmit" />
      </div>
      <div>
        <!-- 선택 요구사항 로딩 애니메이션 처리 -->
        <img
          id="button-addon2"
          type="button"
          class="btn btn-outline-secondary"
          src="../images/search.svg"
          @click="onSubmit" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchValue: '',
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('fetchApi/getMovie', { title: this.searchValue })
    },
  },
}
</script>

<style lang="scss" scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  input {
    width: 500px;
    height: 40px;
  }

  img {
    height: 35px;
  }
}
</style>
>
