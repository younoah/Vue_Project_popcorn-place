<template>
  <SearchBar
    v-model="title"
    @search="onSearch" />
</template>

<script>
import SearchBar from './SearchBar';

export default {
    components: { SearchBar },
    data() {
        return {
            title: '',
            movies: [],
            totalCount: 0,
            page: 1,
            isLoading: false
        };
    },
    methods: {
        async onSearch() {
        },
    }
};
</script>

<style>
body {
  margin: 0px;
}
</style>