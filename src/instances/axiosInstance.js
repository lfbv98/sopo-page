import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-json-server.typicode.com/Apfol/ReactProjectJSON/',
})

export default instance;