const axios = require('axios');
require('dotenv').config();


exports.handler = async function(event) {
    const { title, page } = JSON.parse(event.body);
    const { API_ENDPOINT } = process.env;

    try{
        const { data } = await axios({
            method: 'GET',
            url: `${API_ENDPOINT}s=${title}&page=${page}`
        });

        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (e) {
        console.log('e: ', e);
    }
};