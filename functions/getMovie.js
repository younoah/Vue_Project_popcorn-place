const dotenv = require('dotenv')
const axios = require('axios')
dotenv.config()
const { API_KEY } = process.env

exports.handler = async function (event) {
  const options = JSON.parse(event.body)
  const { title, cnt, method, body } = options
  const { data } = await axios({
    url: `https://www.omdbapi.com?apikey=${API_KEY}&s=${title}&page=${cnt}`,
    method,
    data: body,
  })
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  }
}
