import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:3003/'});

export default API;