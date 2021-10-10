<template>
  <header>
    <h1>
      <a href="/">
        <img
          class="img-logo"
          :src="imgLogo"
          alt="logo" />
      </a>
    </h1>
    <form @submit.prevent>
      <input
        id="search-input"
        :value="keyword"
        placeholder="영화 제목을 입력해주세요. (영어만 검색 가능)"
        type="text"
        autocomplete="off"
        @input="$store.commit('movies/changeKeyword', $event.target.value)" />
    </form>
  </header>
</template>

<script>
export default {
  data() {
    return {
      imgLogo: 'https://user-images.githubusercontent.com/84858773/136695329-9b24dc51-f05b-4fe9-a595-0aa826ce0f15.png',
    }
  },
  computed: {
    keyword() {
      return this.$store.state.movies.keyword
    }
  },
  watch: {
    keyword() {
      if (this.$store.state.movies.isInit === true) {
        this.$store.commit('movies/offInitState')
      }
      this.$store.dispatch('movies/searchMovies')
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  width: 100%;
  box-sizing: border-box;
  z-index: 1;
  background: $color-header-bg;
  box-shadow: $shadow-header;
  height: 100px;
  padding: 0 60px;
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    display: block;
    width: 48px;
    text-decoration: none;
  }

  .img-logo {
    width: 100%;
  }

  form {
    flex-grow: 1;
    display: flex;
    justify-content: center;
  }

  #search-input {
    width: 70%;
    padding: 10px;
    font-size: 16px;
    color: white;
    background-color: $color-secondary;
    border: 1px solid rgba(black, 0.2);
    outline: none;
    border-radius: 5px;
    box-shadow: $shadow-search;
    font-family: $font-family;

    &::placeholder {
      color: rgba(white, 0.7);
    }

    &:focus {
      background-color: $color-primary;
    }
  }
}
</style>
