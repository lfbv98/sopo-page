import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    weather: ""
}

const fetchWeather = (state, action) => {
    return updateObject(state, { weather: action.payload.weather})
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_WEATHER: return fetchWeather(state, action);
        default: return state;
    }
}

export default reducer;