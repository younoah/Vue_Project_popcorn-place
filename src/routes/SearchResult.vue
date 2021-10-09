<template>
  <SearchResult />
  <ContentModal v-if="$store.state.content.isShowModal" />
</template>

<script>
import SearchResult from '~/components/SearchResult';
import ContentModal from '~/components/ContentModal';
export default {
  components: {
    SearchResult,
    ContentModal
  }
};
</script>