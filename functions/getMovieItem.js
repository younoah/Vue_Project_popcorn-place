require('dotenv').config()
const axios = require('axios')
const { API_KEY } = process.env

exports.handler = async function(event) {
    const { searchId, method, body } = JSON.parse(event.body)
    const { data } = await axios({
      url: `https://www.omdbapi.com?apikey=${API_KEY}&i=${searchId}&plot=short`,
      method,
      data: body,
    })
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  }
