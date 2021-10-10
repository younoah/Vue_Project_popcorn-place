export default {
    namespaced: true,
    state() {
        return {
            movieTitle: '',
            moreInfomation: {},
            apiKey: '7035c60c',
            totalresult: 0,
            movieInfo: [],
            page: 1,
            currentPageMovieCount: 0,
            isLoading: false
        }
    },
    getters: {
        movieInformation(state) {
            return state.movieInfo
        }
    },
    mutations: {
        StateDataReset() {
            this.state.movie.movieTitle = '',
                this.state.movie.moreInfomation = {},
                this.state.movie.apiKey = '7035c60c',
                this.state.movie.totalresult = 0,
                this.state.movie.movieInfo = [],
                this.state.movie.page = 1,
                this.state.movie.currentPageMovieCount = 0,
                this.state.movie.isLoading = false
        },

        updateMovieTitle(state, newMovieTitle) {
            this.state.movie.movieTitle = newMovieTitle
            console.log(this.state.movie.movieTitle)

        },
        updateMovieInfo(state, newMovieInfo) {
            this.state.movie.movieInfo = newMovieInfo
            console.log(this.state.movie.movieInfo)
        },
        increaseCurrentPage() {
            this.state.movie.page += 1
        },
        decreaseCurrentPage() {
            this.state.movie.page -= 1
        },
        updateNextPageMovieCount(state, nextPageMoviecount) {
            console.log(nextPageMoviecount)
            this.state.movie.currentPageMovieCount += nextPageMoviecount
        },
        updatePrevPageMovieCount(state, prevPageMoviecount) {
            console.log(prevPageMoviecount)
            this.state.movie.currentPageMovieCount -= prevPageMoviecount
        },

        updatePrevLastPageMovieCount(state, prevPageMoviecount) {
            console.log(prevPageMoviecount)
            const lastPageMovie = prevPageMoviecount % 10
            this.state.movie.currentPageMovieCount -= lastPageMovie
        },


        updatetotalresult(state, newMovieInfoTotal) {
            this.state.movie.totalresult = newMovieInfoTotal
        },
        updateMoreInfoMovie(state, newMoreInfo) {
            this.state.movie.moreInfomation = newMoreInfo
        }
    },
    actions: {
        async searchMovies({
            commit
        }, payload) {
            commit('StateDataReset')
            let {
                movieTitle
            } = payload
            this.state.movie.isLoading = true
            commit('updateMovieTitle', movieTitle)
            console.log(`https://www.omdbapi.com?apikey=${this.state.movie.apiKey}&s=${this.state.movie.movieTitle}&page=1`)
            const movies = await fetch(`https://www.omdbapi.com?apikey=${this.state.movie.apiKey}&s=${this.state.movie.movieTitle}&page=1`, {
                method: 'GET',
            }).then(res => res.json())
            this.state.movie.isLoading = false
            commit('updateNextPageMovieCount', movies.Search.length)
            commit('updateMovieInfo', movies.Search)
            commit('updatetotalresult', movies.totalResults)



        },
        async readMovieInfo({
            commit
        }, payload) {
            const {
                id
            } = payload
            this.state.movie.isLoading = true
            const moreinfo = await fetch(`https://www.omdbapi.com?apikey=${this.state.movie.apiKey}&i=${id}&plot=full`, {
                method: 'GET',
            }).then(res => res.json())
            commit('updateMoreInfoMovie', {
                moreinfo
            })
            this.state.movie.isLoading = false

        },
        async nextMoviesUpdate({
            commit
        }, payload) {
            let {
                movieTitle
            } = payload
            this.state.movie.isLoading = true
            commit('updateMovieTitle', movieTitle)
            console.log(`https://www.omdbapi.com?apikey=${this.state.movie.apiKey}&s=${this.state.movie.movieTitle}&page=1`)
            const movies = await fetch(`https://www.omdbapi.com?apikey=${this.state.movie.apiKey}&s=${this.state.movie.movieTitle}&page=${this.state.movie.page}`, {
                method: 'GET',
            }).then(res => res.json())
            commit('updateNextPageMovieCount', movies.Search.length)
            commit('updateMovieInfo', movies.Search)
            commit('updatetotalresult', movies.totalResults)
            this.state.movie.isLoading = false
        },
        async prevMoviesUpdate({
            commit
        }, payload) {
            let {
                movieTitle
            } = payload
            this.state.movie.isLoading = true
            commit('updateMovieTitle', movieTitle)
            console.log(`https://www.omdbapi.com?apikey=${this.state.movie.apiKey}&s=${this.state.movie.movieTitle}&page=1`)
            const movies = await fetch(`https://www.omdbapi.com?apikey=${this.state.movie.apiKey}&s=${this.state.movie.movieTitle}&page=${this.state.movie.page}`, {
                method: 'GET',
            }).then(res => res.json())
            commit('updatePrevPageMovieCount', movies.Search.length)
            commit('updateMovieInfo', movies.Search)
            commit('updatetotalresult', movies.totalResults)
            this.state.movie.isLoading = false
        },

        async prevLastPageMoviesUpdate({
            commit
        }, payload) {
            let {
                movieTitle
            } = payload
            this.state.movie.isLoading = true
            commit('updateMovieTitle', movieTitle)
            console.log(`https://www.omdbapi.com?apikey=${this.state.movie.apiKey}&s=${this.state.movie.movieTitle}&page=1`)
            const movies = await fetch(`https://www.omdbapi.com?apikey=${this.state.movie.apiKey}&s=${this.state.movie.movieTitle}&page=${this.state.movie.page}`, {
                method: 'GET',
            }).then(res => res.json())
            commit('updatePrevLastPageMovieCount', movies.totalResults)
            commit('updateMovieInfo', movies.Search)
            commit('updatetotalresult', movies.totalResults)
            this.state.movie.isLoading = false
        },

    }
}
