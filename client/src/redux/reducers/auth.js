import { INIT_STATE } from '../constant'
import * as TYPES from '../constants/auth'

export default function authReducers(state = INIT_STATE.auth, action) {
  switch (action.type) {
    // Login
    case TYPES.LOGIN_START:
      return {
        ...state,
        isLoading: true,
      }
    case TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        error: false
      }
    case TYPES.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      }

    // Register
    case TYPES.REGISTER_START:
      return {
        ...state,
        isLoading: true,
      }
    case TYPES.REGISTER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isLoading: false,
        message: 'Đăng ký thành công',
        error: false
      }
    case TYPES.REGISTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      }

    // Logout
    case TYPES.LOGOUT:
      return {
        ...state,
        currentUser: {}
      }
    default:
      return state
  }
} 