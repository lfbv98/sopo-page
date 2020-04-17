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

const storeComment = comment => {
    return {
        type: actionTypes.SAVE_COMMENT_PLACE,
        payload: {
            comment: comment
        }
    };
};

const storeComment1 = comment => {
    return {
        type: actionTypes.SAVE_COMMENT_NEWS,
        payload: {
            comment: comment
        }
    };
};

export const saveCommentPlace = (comment, idPlace) => {
    return dispatch => {
        dispatch(startLoading());
        axios.post('/touristPlaces/' + idPlace + '/comments.json', comment)
            .then(response => {
                dispatch(storeComment(comment));
                dispatch(endLoading());
            })
            .catch(error => {
                dispatch(endLoading());
            })
    }
};

export const saveCommentNews = (comment, idNews) => {
    return dispatch => {
        dispatch(startLoading());
        axios.post('/news/' + idNews + '/comments.json', comment)
            .then(response => {
                dispatch(storeComment1(comment));
                dispatch(endLoading());
            })
            .catch(error => {
                dispatch(endLoading());
            })
    }
}