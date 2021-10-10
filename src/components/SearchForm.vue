<template>
  <section class="search-wrap">
    <form
      class="search-form"
      @submit.prevent="$router.push(`/${keyword}`), searchContents()">
      <input
        v-model="keyword"
        placeholder="Search Movie..." />
      <button type="submit">
        <span class="material-icons">
          search
        </span>
      </button>
    </form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      keyword: ''
    };
  },
  computed: {
    contents() {
      return this.$store.state.content.contents;
    }
  },
  methods: {
    async searchContents() {
      await this.$store.dispatch('content/searchContents', {keyword: this.keyword});
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  .search-form {
    width: 400px;
    height: 56px;
    button {
      width: 56px;
    }
  }
}
.search-form {
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 500px;
  height: 32px;
  margin: 0 auto;
  border: 1px solid $color-border;
  border-radius: 40px;
  transition: all .5s ease;
  input {
    flex-grow: 1;
    border: 0 none;
    &:focus {
      outline: none;
    }
    padding: 0 20px;
    font-family: 'Roboto';
    font-size: 18px;
  }
  button {
    background: none;
    border: 0 none;
    width: 32px;
    height: 100%;
    border-radius: 50%;
    color: $color-icon;
    font-weight: 700;
    font-family: 'Roboto';
    cursor: pointer;
    &:hover {
      background: $color-icon-hover;
    }
  }
}
</style>