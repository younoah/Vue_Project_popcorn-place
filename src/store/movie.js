export default {
    namespaced: true,
    state() {
        return {
            movieTitle: '',
            moreInfomation:{},
            apiKey: '7035c60c',
            totalresult:0,
            movieInfo:[],
            isLoading:true

        }
    },
    getters:{
        movieInformation(state){
            return state.movieInfo
        }
    },
    mutations: {
        updateMovieTitle(state,newMovieTitle) {
            this.state.movie.movieTitle=newMovieTitle
            console.log(this.state.movie.movieTitle)

        },
        updateMovieInfo(state,newMovieInfo){
            this.state.movie.movieInfo=newMovieInfo            
            console.log(this.state.movie.movieInfo)


            
        },
        updatetotalresult(state,newMovieInfoTotal){
            this.state.movie.totalresult=newMovieInfoTotal
        },
        updateMoreInfoMovie(state,newMoreInfo){
            this.state.movie.moreInfomation=newMoreInfo
        }
    },
    actions: {
        async searchMovies({commit}, payload) {
            let {movieTitle} = payload
            commit('updateMovieTitle',movieTitle)
            console.log(`https://www.omdbapi.com?apikey=${this.state.movie.apiKey}&s=${this.state.movie.movieTitle}&page=1`)
            const movies = await fetch(`https://www.omdbapi.com?apikey=${this.state.movie.apiKey}&s=${this.state.movie.movieTitle}&page=1`, {
                method: 'GET',}).then(res => res.json())
            console.log(movies)
            commit('updateMovieInfo',movies.Search)
            commit('updatetotalresult',movies.totalResults)
            this.state.movie.isLoading=false


           
        },
        async readMovieInfo({commit},payload){
            const {id}=payload
            const moreinfo=await fetch(`https://www.omdbapi.com?apikey=${this.state.movie.apiKey}&i=${id}&plot=full`, {
                method: 'GET',
            }).then(res => res.json())
            console.log(moreinfo)
            commit('updateMoreInfoMovie',{
                moreinfo
            })
            console.log(this.state.movie.moreInfomation)
            this.state.movie.isLoading=false
            
        }
    }
}
