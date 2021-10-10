<template>
<div class="found-results-wrapper">
	<h1 class="found-results">
      <u>{{ $route.params.keyword }}</u>&nbsp;
      <strong>검색결과 {{ $store.state.searchResult.totalResults }} 개</strong>중에&nbsp;
			<strong>{{ $store.state.searchResult.Search.length }}개</strong>를 불러왔어요!
      👏👏👏
    </h1>
		</div>
</template>

<style lang="scss" scoped>
	.found-results-wrapper {
		@include flexbox;
		text-align: center;
		word-break: keep-all;
		position: fixed;
		top: $HEADER_HEIGHT - 1;
		font-size: 1.2em;
		width: 100%;
		height: $HEADER_HEIGHT;
		background-color: rgba($COLOR_WHITE, $BASE_OPACITY);
		backdrop-filter: blur(8px);
		z-index: $HEADER_INDEX;
		
		strong {
			font-weight: 700;
		}
	}
</style>