export default {
    namespaced: true,
    state() {
        return {
            movieTitle: '',
            apiKey: '7035c60c',
            totalresult:0,
            movieInfo:[]

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
           
        }
    }
}
