import axios from 'axios';

const API = axios.create({
  baseUrl = 'https://api.github.com/',
});

export default API;
