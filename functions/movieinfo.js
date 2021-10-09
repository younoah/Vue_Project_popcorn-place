const axios = require('axios');
require('dotenv').config();

// https://www.omdbapi.com?apikey=7035c60c&i=tt4520988&plot=full
exports.handler = async function(event) {
    const { id } = JSON.parse(event.body);
    const { API_ENDPOINT } = process.env;

    try{
        const { data } = await axios({
            method: 'GET',
            url: `${API_ENDPOINT}i=${id}&plot=full`
        });

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (e) {
        console.log('e: ', e);
    }
};