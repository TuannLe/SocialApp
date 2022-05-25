import * as TYPES from '../constants/user'

// Register
export const registerStart = (payload) => {
    return {
        type: TYPES.REGISTER_START,
        payload: payload
    }
}

export const registerSuccess = (payload) => {
    return {
        type: TYPES.REGISTER_SUCCESS,
        payload: payload
    }
}

export const registerError = (error) => {
    return {
        type: TYPES.REGISTER_FAILURE,
        error: error
    }
}