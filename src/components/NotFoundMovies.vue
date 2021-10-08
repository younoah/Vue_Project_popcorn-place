<template>
  <h1>'{{ $props.searchWord }}'에 대한 검색결과가 없습니다.</h1>
</template>

<script>
export default {
  props: {
    searchWord: {
      type : String,
      default : ''
    }
  }
};
</script>