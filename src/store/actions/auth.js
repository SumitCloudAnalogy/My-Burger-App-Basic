import * as actionTypes from './actionTypes';
import axios from "axios";
import firebaseAuth from "../../Config/Config";

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    };
};


export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
};
export const checkAuthTimeout = (expirationTime) => {
    return dispatch =>{
        setTimeout(() => {
            dispatch(logout());
        },expirationTime * 1000)
    }
}

export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        console.log(email);
        console.log(password);
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        };
        let url = 'signupNewUser';
        if (!isSignup)  {
             url ='verifyPassword'
        }
        axios.post(firebaseAuth.baseUrl + '/' +url + '?key='+firebaseAuth.apiKey, authData)
            .then(response => {
                dispatch(authSuccess(response.data.idToken, response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn));
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            })
    };
};
