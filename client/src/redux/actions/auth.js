import * as TYPES from '../constants/auth'

// Login
export const loginStart = (payload) => {
    return {
        type: TYPES.LOGIN_START,
        payload: payload,
    }
}

export const loginSuccess = (payload) => {
    return {
        type: TYPES.LOGIN_SUCCESS,
        payload: payload,
    }
}

export const loginError = (error) => {
    return {
        type: TYPES.LOGIN_FAILURE,
        error: error,
    }
}

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

// Logout
export const logout = () => {
    return {
        type: TYPES.LOGOUT,
        payload: {}
    }
}

// Edit profile
export const editProfileStart = () => {

}

export const editProfileSuccess = () => {

}

export const editProfileFailure = () => {

}