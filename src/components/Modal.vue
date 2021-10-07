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
            <img :src="movieDetail.Poster" />
            <div>{{ movieDetail }}</div>
          </div>
        </div>
        <div v-else>
          <img
            style="width : 100%;"
            src="https://cdn.roto.codes/images/nyan-cat.gif"
            alt="Loading..." />
        </div>
      </div>
    </div>
  </template>
</template>

<script>

export default{
    props:{
        id:{
            type : String,
            default : null
        }
    },
    data(){
        return{
            isShow : false,

        }
    },
    computed: {
        movieDetail() {
            return this.$store.state.fetchApi.movieDetail
        },
    },
    methods: {
        onModal(){
            this.isShow = true
            this.$store.dispatch('fetchApi/getDetail', this.id)
        },
        offModal(){
            this.isShow = false
            this.$store.commit('fetchApi/movieDetailState','')

        }
    }
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

    background-color: white;
    box-sizing: border-box;
    padding: 20px;
    height: 80%;
    width: 80%;
    button.close {
      float: right;
    }
  }
}

</style>
