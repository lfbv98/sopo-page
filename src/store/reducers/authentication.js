import * as actionTypes from '../actions/actionTypes';
import updateObject from '../utility';

const initialState = {
    isUserLoggedIn: false,
    userLoggedIn: {
        userName: '',
        idToken: '',
        localId: ''
    },
    loadingAuth: false,
    isSignupError: false,
    isLoginError: false,
}

const login = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            userName: action.payload.userName,
            idToken: action.payload.idToken,
            localId: action.payload.localId
        }
    });
}

const signUp = (state, action) => {
    return updateObject(state, {
        isUserLoggedIn: true,
        userLoggedIn: {
            userName: action.payload.userName,
            idToken: action.payload.idToken,
            localId: action.payload.localId
        }
    });
}

const getData = (state, action) => {
    return updateObject(state, {
        userLoggedIn: {
            userName: action.payload.userName,
            idToken: action.payload.idToken,
            localId: action.payload.localId
        }
    });
}

const logOut = state => {
    return updateObject(state, {
        isUserLoggedIn: false,
        userLoggedIn: {
            userName: '',
            idToken: '',
            localId: ''
        }
    });
}

const startLoading = state => {
    return updateObject(state, { loadingAuth: true });
}

const endLoading = state => {
    return updateObject(state, { loadingAuth: false });
}

const startSignUpError = state => {
    return updateObject(state, { isSignupError: true });
}

const endSignUpError = state => {
    return updateObject(state, { isSignupError: false });
}

const startLogininError = state => {
    return updateObject(state, { isLoginError: true });
}

const endLogininError = state => {
    return updateObject(state, { isLoginError: false });
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN: return login(state, action);
        case actionTypes.SIGN_UP: return signUp(state, action);
        case actionTypes.LOG_OUT: return logOut(state, action);
        case actionTypes.GET_DATA: return getData(state, action);
        case actionTypes.START_LOADING: return startLoading(state, action);
        case actionTypes.END_LOADING: return endLoading(state, action);
        case actionTypes.START_SIGNUP_ERROR: return startSignUpError(state, action);
        case actionTypes.END_SIGNUP_ERROR: return endSignUpError(state, action);
        case actionTypes.START_LOGIN_ERROR: return startLogininError(state, action);
        case actionTypes.END_LOGIN_ERROR: return endLogininError(state, action);
        default: return state;
    }
}

export default reducer;