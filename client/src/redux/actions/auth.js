// import { createActions } from "redux-actions";
import * as TYPES from '../constants/auth'

export const loginStart = (payload) => {
    return {
        type: TYPES.LOGIN_START,
        payload: payload,
    }
}

export const loginSuccess = (payload) => {
    return {
        type: TYPES.LOGIN_SUCCESS,
        payload: payload
    }
}

export const loginError = (error) => {
    return {
        type: TYPES.LOGIN_FAILURE,
        error: error,
    }
}

export const registerStart = (payload) => {
    return {

    }
}

export const registerSuccess = (payload) => {
    return {

    }
}

export const registerError = (error) => {
    return {

    }
}