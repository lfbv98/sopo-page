import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    news: [],
    loadingNews: false,
    newsSelected: "",
}

const fetchNews = (state, action) => {
    return updateObject(state, { news: action.payload.news})
}

const fetchNew = (state, action) => {
    return updateObject(state, { newsSelected: action.payload.news})
}

const startLoading = (state, action) => {
    return updateObject(state, { loadingNews: true });
}

const endLoading = (state, action) => {
    return updateObject(state, { loadingNews: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_NEWS: return fetchNews(state, action);
        case actionTypes.START_LOADING: return startLoading(state, action);
        case actionTypes.END_LOADING: return endLoading(state, action);
        case actionTypes.FETCH_NEW: return fetchNew(state, action);
        default: return state;
    }
}

export default reducer;