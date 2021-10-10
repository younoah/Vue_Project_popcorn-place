import axios from 'axios';

const API_END_POINT = process.env.API_END_POINT;
const API_KEY = process.env.API_KEY;

const request = axios.create({
  baseURL: `${API_END_POINT}`,
});

export default request;
