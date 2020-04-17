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

const loadNews = news => {
    return {
        type: actionTypes.FETCH_NEWS,
        payload: {
            news: news
        }
    };
}

const loadNew = news => {
    return {
        type: actionTypes.FETCH_NEW,
        payload: {
            news: news
        }
    };
}

export const fetchNews = () => {
    return dispatch => {
        dispatch(startLoading());

        axios.get('/news.json')
            .then(response => {

                const news = Object.values(response.data).map((newss) => {
                    return {...newss};
                }); 

                dispatch(loadNews(news));
                dispatch(endLoading());
            })
            .catch(error => {
                dispatch(endLoading());
            })
    }
}

export const fetchNew = (idNews) => {
    return dispatch => {
        dispatch(startLoading());
        axios.get('/news/' + idNews + '.json')
            .then(response => {
                console.log(response);

                var news = response.data;

                console.log(news)

                dispatch(loadNew(news));
                dispatch(endLoading());
            })
            .catch(error => {
                console.log(error);
                dispatch(endLoading());
            })
    }
}
