import * as TYPES from '../constants/user'

// Search users
export const findUsersStart = (payload) => {
    return {
        type: TYPES.FIND_USERS_START,
        payload
    }
}

export const findUsersSuccess = (payload) => {
    return {
        type: TYPES.FIND_USERS_SUCCESS,
        payload
    }
}

export const findUsersFailure = (error) => {
    return {
        type: TYPES.FIND_USERS_FAILURE,
        error
    }
}

// Get user by id
export const getUserByIdStart = (payload) => {
    return {
        type: TYPES.GET_USER_BY_ID_START,
        payload
    }
}

export const getUserByIdSuccess = (payload) => {
    return {
        type: TYPES.GET_USER_BY_ID_SUCCESS,
        payload
    }
}

export const getUserByIdFailure = (error) => {
    return {
        type: TYPES.GET_USER_BY_ID_FAILURE,
        error
    }
}

// Check follow user
export const checkFollowUserStart = (payload) => {
    return {
        type: TYPES.CHECK_FOLLOW_USER_START,
        payload
    }
}

export const checkFollowUserSuccess = (payload) => {
    return {
        type: TYPES.CHECK_FOLLOW_USER_SUCCESS,
        payload
    }
}

export const checkFollowUserFailure = (error) => {
    return {
        type: TYPES.CHECK_FOLLOW_USER_FAILURE,
        error
    }
}

// Follow user
export const followUserStart = (payload) => {
    return {
        type: TYPES.FOLLOW_USER_START,
        payload
    }
}

export const followUserSuccess = (payload) => {
    return {
        type: TYPES.FOLLOW_USER_SUCCESS,
        payload
    }
}

export const followUserFailure = (error) => {
    return {
        type: TYPES.FOLLOW_USER_FAILURE,
        error
    }
}

// UnFollow user
export const unFollowUserStart = (payload) => {
    return {
        type: TYPES.UNFOLLOW_USER_START,
        payload
    }
}

export const unFollowUserSuccess = (payload) => {
    return {
        type: TYPES.UNFOLLOW_USER_SUCCESS,
        payload
    }
}

export const unFollowUserFailure = (error) => {
    return {
        type: TYPES.UNFOLLOW_USER_FAILURE,
        error
    }
}