import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://api.worldweatheronline.com/premium/v1/weather.ashx'
});

export default instance;