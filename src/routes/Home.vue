<template>
  <div class="home__wrapper">
    <h1 class="title">
      원하는 영화를 쉽고 빠르게
    </h1>
    <div class="search-area">
      <input
        ref="search"
        class="search"
        placeholder="검색하세요 😉"
        @keyup.enter.prevent="submit" />
    </div>
    <p
      v-if="!checkLength"
      class="recommend">
      3글자 이상 작성해주세요
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkLength: true
    }
  },
  mounted() {
    this.$refs.search.focus()
  },
  methods: {
    async submit() {
      if (this.$refs.search.value.length < 3) {
        // submit 후 3글자 미만이라면
        this.recommendLongerValue()
        return
      }
      this.checkLength = true
      await this.$store.dispatch('searchResult/updateSearchResults', {
        keyword: this.$refs.search.value
      })
      this.$router.push({ name: 'SearchResults', params: { keyword: this.$refs.search.value } })
      this.$refs.search.value = ''
    },
    recommendLongerValue() { // FIXME: 이거 computed에 적어야 되나? 
      console.log('less than 3')
      this.checkLength = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .home__wrapper {
    height: calc(100vh - $HEADER_HEIGHT * 2);
    @include flexbox;
    flex-direction: column;
    flex-grow: 1;
  }

  .title {
    font-size: 50px;
    font-weight: 700;
    margin-bottom: $BASE_PADDING * 4;
  }

  .search-area {
    display: flex;
    justify-content: center;
    width: 100%;
    .search {
      width: 80%;
      min-width: 250px;
      padding: $BASE_PADDING;
      font-size: 24px;
      border-radius: $BORDER_RADIOUS;
      border: 2px solid $COLOR_GRAY;

      &:hover, &:focus {
        border-color: $COLOR_RED;
        outline: none;
      }

      &::placeholder {
        color: $COLOR_SECONDARY;
      }
    }
  }

  .recommend {
    padding: $BASE_PADDING 0;
    color: $COLOR_RED;      
  }
</style>