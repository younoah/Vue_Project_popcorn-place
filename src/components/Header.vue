
<template>
  <header>
    <div class="header__inner">
      <div
        class="logo"
        tabindex="0"
        aria-label="글로벌 로고"
        @click="$router.push('/')">
        <img
          src="../assets/images/global-logo.png"
          alt="글로벌 로고" />
      </div>
      <button class="menu-btn">
        <span class="material-icons">
          menu
        </span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: $HEADER_INDEX;
	background-color: rgba($COLOR_WHITE, $BASE_OPACITY);
	backdrop-filter: blur(8px);
}

.header__inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: $HEADER_HEIGHT;
		padding: 0 $BASE_PADDING;
	}
	.logo {
		cursor: pointer;
		img {
			width: 120px;
			height: 40px;
		}
	}

	.menu-btn {
		padding: 5px;
		.material-icons {
			font-size: 30px;
			color: $COLOR_PRIMARY;
		}
	}
</style>