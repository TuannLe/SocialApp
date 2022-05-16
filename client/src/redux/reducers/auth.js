import { INIT_STATE } from '../constant'
import { getType } from '../actions'
import { login } from '../actions/auth'

export default function authReducers(state = INIT_STATE.auth, action) {
    switch (action) {
        case getType(login.loginStart):
            return {
                ...state,
                isFetching: true
            }
        case getType(login.loginSuccess):
            console.log(action.payload, 'login success')
            return {
                ...state,
                isFetching: false,
                currentUser: action.payload,
                error: false
            }
        case getType(login.loginFailure):
            return {
                ...state,
                isFetching: false,
                error: true
            }
        default:
            return state
    }
} 