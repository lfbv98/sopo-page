import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    places: [],
    loadingPlaces: false,
    placeSelected: "",
}

const fetchTourism = (state, action) => {
    return updateObject(state, { places: action.payload.places})
}

const fetchPlace = (state, action) => {
    return updateObject(state, { placeSelected: action.payload.place})
}

const startLoading = state => {
    return updateObject(state, { loadingPlaces: true });
}

const endLoading = state => {
    return updateObject(state, { loadingPlaces: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TOURISM: return fetchTourism(state, action);
        case actionTypes.START_LOADING: return startLoading(state, action);
        case actionTypes.END_LOADING: return endLoading(state, action);
        case actionTypes.FETCH_PLACE: return fetchPlace(state, action);
        default: return state;
    }
}

export default reducer;