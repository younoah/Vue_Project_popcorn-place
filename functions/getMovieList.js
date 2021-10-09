require('dotenv').config()
const axios = require('axios')
const { API_KEY } = process.env

exports.handler = async function (event) {
    const { searchTitle, page, method, body } = JSON.parse(event.body)
    const { data } = await axios({
      url: `https://www.omdbapi.com?apikey=${API_KEY}&s=${searchTitle}&page=${page}`,
      method,
      data: body,
    })
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    }
  }