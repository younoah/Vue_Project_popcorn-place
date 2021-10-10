<template>
  <div
    v-if="showModal"  
    class="modal--mask"
    @click="ToggleModal">
    <div 
      class="modal--wrapper">
      <div
        class="modal--container"
        @click.stop>
        <div class="container--left">
          <div class="modal--img">
            <img
              :src="selectedMovie.Poster"
              art="poster..." />
          </div>
        </div>
        <div class="container--right">
          <div class="modal--header">
            {{ selectedMovie.Title }}
          </div>
          <div class="modal--body">
            {{ selectedMovie.Plot }}
          </div>
          <div class="modal--footer">
            <div class="footer--top">
              <span class="footer--release">
                개봉일 : {{ selectedMovie.Released }}
              </span>
              <span class="footer--runtime">
                상영 시간 : {{ selectedMovie.Runtime }}
              </span>
              <span class="footer--production">
                제작 : {{ selectedMovie.Production }}
              </span>
            </div>
            <div class="footer--bottom">
              <span class="footer--rateing">
                평점 : {{ selectedMovie.imdbRating }}
              </span>
              <span class="footer--like">
                좋아요 : {{ selectedMovie.imdbVotes }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
    selectedMovie(){
      return this.$store.state.movie.selectedMovie
    },
    showModal(){
      return this.$store.state.movie.showModal
    }
  },
  methods: {
    ToggleModal(){
      this.$store.commit('movie/ToggleModal')
    }
  }
}
</script>
<style lang="scss" scoped>

.modal--mask{
    position: fixed;
    z-index:9998;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    .modal--wrapper{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        .modal--container{
            background-color: #fff;
            width:1200px;
            height: 800px;
            margin:0 auto;
            padding: 10px 20px 10px 0px;
            border-radius: 4px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
            display: flex;
            .container--left{
                width: 50%;
                .modal--img{
                  height: 100%;
                  img{
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                  } 
                }
            }
            .container--right{
                width:50%;
                display: flex;
                flex-direction: column;
                background-color: cornflowerblue;
                color: $color-font;
                font-size: 16px;
                font-weight: 700;
                .modal--header{
                    height: 20%;
                    background-color: rgba($color-background, 0.9);
                    text-align: center;
                    padding-top: 30px;
                    font-size: 32px;
                }
                .modal--body{
                    height: 50%;
                    background-color: darkgray;
                    padding: 12px;
                }
                .modal--footer{
                    padding: 12px;
                    height: 30%;
                    color: rgba($color-font, .6);
                    font-weight: 400;
                    .footer--top{
                      display: flex;
                      flex-direction: column;
                    }
                    .footer--bottom{
                      font-weight: 700;
                      margin-top: 16px;
                      span{
                        margin-right: 8px;
                      }
                    }
                }
            }  
        }
    }
}
</style>
