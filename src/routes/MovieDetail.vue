<template>
  <div
    class="button-prev"
    @click="$router.go(-1)">
    back
  </div>
  <div class="movie-title">
    {{ Title }}
  </div>
  <div class="movie">
    <div class="movie-meta">
      <div
        v-for="(value,name) in $data"
        :key="name">
        <div v-if="name==='Poster'"></div>
        <div v-else-if="name==='Title'"></div>
        <div v-else-if="name==='Ratings'">
          <span style="font-weight: bold">Ratings</span>
          <div class="ratings">
            <div v-for="rating of value">
              <div class="ratings__detail">
                <span style="font-weight: bold">{{ rating.Source }}: </span>
                <span>{{ rating.Value }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-else-if="name==='Plot'">
          <div class="movie-meta__plot">
            <span class="movie-meta__attribute">{{ name }}:</span>
            <span>{{ value }}</span>
          </div>
        </div>
        <div v-else>
          <span class="movie-meta__attribute">{{ name }}:</span>
          <span>{{ value }}</span>
        </div>
      </div>
    </div>

    <img
      class="movie-poster"
      :src="`${Poster}`"
      alt="poster" />
  </div>
</template>
<script>
export default {
  data(){
    return{
      Title:'',
      Year:'',
      Rated:'',
      Released:'',
      Runtime:'',
      Genre:'',
      Director:'',
      Writer:'',
      Actors:'',
      Plot:'',
      Language:'',
      Country:'',
      Awards:'',
      Poster:'',
      Ratings:[],
      Metascore:'',
      imdbRating:'',
      imdbVotes:'',
      Type:'',
      DVD:'',
      BoxOffice:'',
      Production:'',
      Website:'',

    }
  },


  async created(){
    await this.$store.dispatch('movie/searchMovieDetail',{
      imdbID:this.$route.params.imdbID
    })
    const detail=this.$store.state.movie.detail
    const detailIndex=[
      'Title','Year','Rated','Released','Runtime',
      'Genre','Director', 'Writer','Actors','Plot',
      'Language','Country','Awards','Poster','Ratings',
      'Metascore','imdbRating','imdbVotes','Type','DVD',
      'BoxOffice','Production','Website'
    ]

    detailIndex.forEach(idx=>{
      this.$data[idx]=detail[idx]
    })
    console.log(this.$data)


  },
}
</script>
<style lang="scss" scoped>
.button-prev{
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 10px;
  margin: 0;
  border: 3px solid gray;
  font-size: 30px;

  border-radius: 15px;
  &:hover{
    cursor:pointer;
    background-color: white;
    color: black;
  }
}
.movie{
  display: flex;
  margin-right: 200px;
  margin-left: 200px;
  &-title{
    position: relative;
    left: 150px;
    font-weight: bold;
    font-size: 50px;
    padding-bottom: 30px;
  }
  &-meta{
    flex-basis: 400px;
    flex-shrink: 0;
    padding-right: 10px;
    font-size: 20px;
    &__attribute{
      font-weight: bold;
      font-size: 20px;
      padding:10px 10px 10px 0;
    }
    &__plot{
      position: absolute;
      top: 1200px;
      width: 950px;
      padding-bottom: 100px;
    }
  }
  &-poster{
    flex-basis: 300px;
    flex-shrink: 0;
    padding-left: 200px;
    height: 400px;
    width: 250px;
  }

}

.ratings{
  margin: 10px 20px;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid white;
  width: 300px;
}
</style>