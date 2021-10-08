<template>
  <div @click="onModal">
    <slot name="activator"></slot>
  </div>

  <template v-if="isShow">
    <div
      class="modal"
      @click="offModal">
      <div
        class="modal__inner"
        @click.stop>
        <div v-if="movieDetail">
          <button
            class="close"
            @click="offModal">
            X
          </button>
          <div>
            <img
              :src="movieDetail.Poster"
              class="pb-4" />
            <div class="detail-body">
              <h2 class="detail-title pb-4">
                제목 : {{ movieDetail.Title }}
              </h2>
              <div class="detail-text">
                <p>장르 : {{ movieDetail.Genre }}</p>
                <p>배우 : {{ movieDetail.Actors }}</p>
                <p>연도 :{{ movieDetail.Year }}</p>
                <p>국가 : {{ movieDetail.Country }}</p>
                <p>줄거리 : {{ movieDetail.Plot }}</p>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <!-- 선택 요구사항 로딩 애니메이션 처리 -->
          <img
            style="width: 100%"
            src="https://cdn.roto.codes/images/nyan-cat.gif"
            alt="Loading..." />
        </div>
      </div>
    </div>
  </template>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isShow: false,
    }
  },
  computed: {
    movieDetail() {
      return this.$store.state.fetchApi.movieDetail
    },
  },
  methods: {
    onModal() {
      this.isShow = true
      this.$store.dispatch('fetchApi/getDetail', this.id)
    },
    offModal() {
      this.isShow = false
      this.$store.commit('fetchApi/movieDetailState', '')
    },
  },
}
</script>

<style lang="scss" scoped>
.modal {
  background-color: rgba(black, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
  &__inner {
    overflow: scroll;
    background-color: white;
    box-sizing: border-box;
    padding: 20px;
    height: 80%;
    width: 80%;
    button.close {
      float: right;
    }
  }
  img{
    float: left;
    padding-right: 20px;
  }
}
</style>
