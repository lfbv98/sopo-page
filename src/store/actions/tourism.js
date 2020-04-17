import * as actionTypes from './actionTypes';
import axios from '../../instances/axios-database';

const startLoading = () => {
    return {
        type: actionTypes.START_LOADING
    }
}

const endLoading = () => {
    return {
        type: actionTypes.END_LOADING
    }
}

const loadPlaces = places => {
    return {
        type: actionTypes.FETCH_TOURISM,
        payload: {
            places: places
        }
    };
}

const loadPlace = place => {
    return {
        type: actionTypes.FETCH_PLACE,
        payload: {
            place: place
        }
    };
}

export const fetchTourism = () => {
    return dispatch => {
        dispatch(startLoading());
        axios.get('/touristPlaces.json')
            .then(response => {

                const places = Object.values(response.data).map((place) => {
                    return { ...place };
                });


                dispatch(loadPlaces(places));
                dispatch(endLoading());
            })
            .catch(error => {
                dispatch(endLoading());
            })
    }
}

export const fetchPlace = (idPlace) => {
    return dispatch => {
        dispatch(startLoading());
        axios.get('/touristPlaces/' + idPlace + '.json')
            .then(response => {
                console.log(response);

                var place = response.data;

                console.log(place)

                dispatch(loadPlace(place));
                dispatch(endLoading());
            })
            .catch(error => {
                console.log(error);
                dispatch(endLoading());
            })
    }
}