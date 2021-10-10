<template>
		<div class="overlay" v-show="this.isLoading">
		<div class="loading">
				<img class="loading-img" src="../assets/images/cat_walking.gif" alt="로딩 이미지">
			</div>
			<p class="loading-txt">로딩중...</p>
		</div>
</template>

<script>
	import BounceLoader from 'vue-spinner/src/BounceLoader'
export default {
	components: {
		BounceLoader
	},
	computed: {
		isLoading() {
      return this.$store.getters['searchResult/isLoading']
    }
	},
	watch: {
		isLoading(value) {
			console.log(value, 'watch')
		}
	}
}
</script>

<style lang="scss">

.overlay {
	z-index: 999;
	position: fixed;
	top: 0;
	width: 100%;
	height: 100vh;
}

.loading {
	position: relative;
	height: 100%;

	&-img {
		width: 100%;
		height: 100%;
	}

	&-txt {
		position: absolute;
		top: 35%;
		left: 45%;
		font-size: 30px;
		color: $COLOR_WHITE;
	}
}

</style>

