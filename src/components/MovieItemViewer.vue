<template>
  <div
    class="modal__wrapper"
    @click="$emit('closeViewer')">
    <div
      class="modal__container"
      @click.stop>
      <Loading v-if="!isLoading" />
      <div
        v-else
        class="modal__section">
        <img
          :src="movieItem.Poster"
          alt="moviePoster" />
        <div class="movie-details">
          <h1>{{ movieItem.Title }}</h1>
          <p>
            Released:<span>{{ movieItem.Released }}</span>
          </p>
          <p>
            Runtime:<span>{{ movieItem.Runtime }}</span>
          </p>
          <p>
            Actors:<span>{{ movieItem.Actors }}</span>
          </p>
          <p>
            Director:<span>{{ movieItem.Director }}</span>
          </p>
          <p>
            Plot:<span>{{ movieItem.Plot }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Loading from '~/components/Loading'
export default {
  components: {
    Loading
  },
   emits: ['closeViewer'],
   computed: {
       movieItem(){
           return this.$store.state.movieList.selectedMovie
       },
       isLoading(){
          return this.$store.state.movieList.isLoading
       }
   }
}
</script>


<style lang="scss" scoped>

.modal__wrapper {
    position: fixed;
    background-color: $color-modalwrapper;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    .modal__container {
        background-color: $color-modalcontainer;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 800px;
        height: 600px;

        .modal__section {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          padding: 0 20px;

          .movie-details {
            width: 500px;
            text-overflow: ellipsis;
            overflow: hidden;
            padding: 0 20px;

            h1 {
              font-size: 30px;
              font-weight: 700;
              margin-bottom: 30px;
            }
            p{
              font-weight: 500;
              font-size: 20px;
              margin: 10px;
              span {
                margin: 0 10px;
              }
            }
          }
        }
    }
}
    
</style>