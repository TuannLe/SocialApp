import * as TYPES from '../constants/post'

// Get posts
export const getPostsStart = () => {
    return {
        type: TYPES.GET_POSTS_START,
    }
}

export const getPostsSuccess = (payload) => {
    return {
        type: TYPES.GET_POSTS_SUCCESS,
        payload: payload
    }
}

export const getPostsError = (error) => {
    return {
        type: TYPES.GET_POSTS_FAILURE,
        error: error
    }
}

// Create post
export const createPostStart = (payload) => {
    return {
        type: TYPES.CREATE_POST_START,
        payload: payload
    }
}

export const createPostSuccess = (payload) => {
    return {
        type: TYPES.CREATE_POST_SUCCESS,
        payload: payload
    }
}

export const createPostError = (error) => {
    return {
        type: TYPES.CREATE_POST_FAILURE,
        error: error
    }
}

// Update post 
export const updatePostStart = (payload) => {
    return {
        type: TYPES.UPDATE_POST_START,
        payload: payload
    }
}

export const updatePostSuccess = (payload) => {
    return {
        type: TYPES.UPDATE_POST_SUCCESS,
        payload: payload
    }
}

export const updatePostError = (error) => {
    return {
        type: TYPES.UPDATE_POST_FAILURE,
        error: error
    }
}