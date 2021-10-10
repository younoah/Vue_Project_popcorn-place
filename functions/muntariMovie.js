require('dotenv').config()
const axios = require('axios')
const { API_END_POINT, API_KEY } = process.env 

exports.handler = async function (event) {
    const options = JSON.parse(event.body)
    const { movieId, title, page=1 } =options
    
    if (title && !movieId){
        const { data } = await axios({
            url: `${API_END_POINT}?apikey=${API_KEY}&s=${title}&page=${page}`,
            method: 'GET'
        })
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    }
    if (!title && movieId){
        const { data } = await axios({
            url: `${API_END_POINT}?apikey=${API_KEY}&i=${movieId}&plot=full`,
            method: 'GET'
        })
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        }
    }    
}
