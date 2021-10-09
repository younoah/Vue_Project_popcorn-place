require('dotenv').config();
const axios = require('axios');

const { API_ENDPOINT, API_KEY } = process.env;

exports.handler = async function (event) {
  const options = JSON.parse(event.body);
  const { keyword } = options;
  const { data } = await axios({
    url: `${API_ENDPOINT}?apikey=${API_KEY}&s=${keyword}&page=1`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
};