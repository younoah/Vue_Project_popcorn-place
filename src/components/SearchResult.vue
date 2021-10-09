<template>
  <section class="result-wrap">
    <div
      v-if="contents === undefind"
      class="no-result">
      <p>No results found</p>
    </div>
    <ul v-else-if="contents">
      <SearchResultItem
        v-for="content in contents"
        :key="content.imdbID"
        :content="content" />
    </ul>
  </section>
</template>

<script>
import SearchResultItem from '~/components/SearchResultItem';

export default {
  components: {
    SearchResultItem
  },
  computed: {
    contents() {
      return this.$store.state.content.contents;
    },
    isShowModal() {
      return this.$store.state.content.isShowModal;
    }
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
</style>