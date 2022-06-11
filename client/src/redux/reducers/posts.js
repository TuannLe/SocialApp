import { INIT_STATE } from '../constant'
import * as TYPES from '../constants/post'

export default function postsReducers(state = INIT_STATE.posts, action) {
    switch (action.type) {

        // // Get posts
        case TYPES.GET_POSTS_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.GET_POSTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            }
        case TYPES.GET_POSTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }

        // Create post
        case TYPES.CREATE_POST_START:
            return {
                ...state,
                isLoading: true,
            }
        case TYPES.CREATE_POST_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isLoading: false,
                error: false
            }
        case TYPES.CREATE_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }

        // // Update post
        // case TYPES.UPDATE_POST_START:
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        // case TYPES.UPDATE_POST_SUCCESS:
        //     return {
        //         ...state,
        //         data: action.payload,
        //         isLoading: false,
        //         error: false
        //     }
        // case TYPES.UPDATE_POST_FAILURE:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         error: true
        //     }

        // Delete post 
        case TYPES.DELETE_POST_START:
            return {
                ...state,
                isLoading: true
            }
        case TYPES.DELETE_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: false
            }
        case TYPES.DELETE_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        // Like post
        case TYPES.LIKE_POST_START:
            return {
                ...state,
                isLoading: true
            }
        case TYPES.LIKE_POST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: false
            }
        case TYPES.LIKE_POST_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: true
            }
        default:
            return state
    }
}