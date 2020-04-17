import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    comment: [],
    loadingComments: false,
}

const saveCommentPlace = (state, action) => {
    return updateObject(state, {  comment: action.payload.comment });
}

const saveCommentNews = (state, action) => {
    return updateObject(state, {  comment: action.payload.comment });
}

const startLoading = state => {
    return updateObject(state, { loadingComments: true });
}

const endLoading = state => {
    return updateObject(state, { loadingComments: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_COMMENT_PLACE: return saveCommentPlace(state, action);
        case actionTypes.START_LOADING: return startLoading(state, action);
        case actionTypes.END_LOADING: return endLoading(state, action);
        case actionTypes.SAVE_COMMENT_NEWS: return saveCommentNews(state, action);
        default: return state;
    }
}

export default reducer;