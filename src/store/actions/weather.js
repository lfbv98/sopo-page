import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-weather';

const API_KEY = '233514a1642a41499a3191455191211';


const loadWeather = weather => {
    return {
        type: actionTypes.FETCH_WEATHER,
        payload: {
            weather: weather
        }
    };
}

export const fetchWeather = (placeName) => {
    return dispatch => {
        dispatch(startLoading());
        axios.get('?key=' + API_KEY + '&q=' + placeName + '&format=json')
            .then(response => {
                console.log(response);
                const weather = response.data;
                console.log(weather);
                dispatch(loadWeather(weather));
                dispatch(endLoading());
            })
            .catch(error => {
                dispatch(endLoading());
            })
    }
}