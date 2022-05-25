import { INIT_STATE } from '../constant'
import * as TYPES from '../constants/user'

export default function userReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case TYPES.REGISTER_START:
      return {
        ...state,
        isFetching: true,
      }
    case TYPES.REGISTER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
        error: false
      }
    case TYPES.REGISTER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    default:
      return state
  }
}