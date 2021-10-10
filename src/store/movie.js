export default {
  namespaced:true,
  state(){
    return{
      title:'Frozen',
      year:'2013',
      apiKey:'7035c60c',
      page:1,
      movieList:[],
      isReady:false,
      detail:{}
    }
  },
  mutations:{
    assignState(state, payload){
      Object.keys(payload).forEach(key=>{
        state[key]=payload[key]
      })
    },
    setMovieTitle(state,title){
      state.title=title
    }
    ,
    moveToNext(state){
      state.page+=1
    },
    moveToPrev(state){
      state.page-=1
    }
  },
  getters:{},
  actions:{
    async searchMovieDetail({commit},payload={}){
      const API_END_POINT='https://www.omdbapi.com'
      const {imdbID}=payload
      const {apiKey}=this.state.movie
      const detail=await fetch(`${API_END_POINT}?apiKey=${apiKey}&i=${imdbID}&plot=full/`,{
        method:'GET'
      }).then(res=>res.json())
      console.log(detail)
      commit('assignState',{detail})


    }
    ,async searchMovies({commit},payload={}){
      const API_END_POINT='https://www.omdbapi.com'
      const {title,year}=payload
      commit('assignState',{
        title,
        year,
        isInitialize:true
      })
      const {apiKey,page}=this.state.movie
      console.log(`${API_END_POINT}?apikey=${apiKey}&s=${this.state.movie.title}&page=${page}&year=${this.state.movie.year}/`)
      const movieList=await fetch(`${API_END_POINT}?apikey=${apiKey}&s=${this.state.movie.title}&page=${page}&year=${this.state.movie.year}/`,{
        method:'GET',

      }).then(res=>res.json())
      if(movieList.Response==='True'){
        commit('assignState',{
          movieList,

        })
      }else{
        console.log('not found')
        commit('assignState',{
          isInitialize:false
        })
      }


    },


  }
}