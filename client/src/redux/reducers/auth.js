import { INIT_STATE } from '../constant'
import * as TYPES from '../constants/auth'

export default function authReducers(state = INIT_STATE.auth, action) {
    switch (action.type) {
        case TYPES.LOGIN_START:
            return {
                ...state,
                isFetching: true
            }
        case TYPES.LOGIN_SUCCESS:
            console.log('login success')
            return {
                ...state,
                isFetching: false,
                currentUser: action.payload,
                error: false
            }
        case TYPES.LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
} 