const axios = require('axios')

require('dotenv').config()
const { API_KEY } = process.env

exports.handler = async function (event) {
  const { method, option, body } = JSON.parse(event.body)
  const { data } = await axios({
    url: `https://www.omdbapi.com?apikey=${API_KEY}${option}`,
    method,
    data: body
  })

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}