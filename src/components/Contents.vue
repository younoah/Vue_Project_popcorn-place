<template>
  <div class="inner--contents">
    <div
      v-for="content in contents"
      :key="content.imdbID"
      class="contents--item"
      @click="onToggleTodetail(content.imdbID)">
      <div class="item--poster">
        <img
          :src="content.Poster"
          alt="poster..." />
      </div>
      <div class="item--desc">
        <div class="desc--title">
          {{ content.Title }}
        </div>
        <div class="desc--year">
          @{{ content.Year }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    computed:{
        contents(){
            return this.$store.state.movie.Search
        }
    },
    created() {
        this.$store.dispatch('movie/searchMovies',{
            title: 'avengers',
        })
    },
    methods: {
      onToggleTodetail(movieId){
        this.$store.dispatch('movie/detailMovie',{
          movieId
        })
      }
    },
}
</script>

<style lang="scss" scoped>
.inner--contents{
    display: flex;
    flex-wrap: wrap;
    margin-top: 24px;
    align-items: flex-start;
    justify-content: center;
    .contents--item{
        margin: 12px;
        .item--poster{
            width: 355px;
            height: 100%;
            img{
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        .item--desc{
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 12px;
            .desc--title{
                width:200px;
                text-align: center;
                overflow: hidden;
                white-space: normal;
                font-weight: 700;
            }
        }
    }
}
</style>
