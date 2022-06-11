import { INIT_STATE } from '../constant'
import * as TYPES from '../constants/user'

export default function userReducers(state = INIT_STATE.user,) {
    switch (action.type) {
        // Search user
        case TYPES.FIND_USERS_START:
            return {

            }
        case TYPES.FIND_USERS_SUCCESS:
            return {

            }
        case TYPES.FIND_USERS_FAILURE:
            return {

            }
        // Get user by id
        case TYPES.GET_USER_BY_ID_START:
            return {

            }
        case TYPES.GET_USER_BY_ID_SUCCESS:
            return {

            }
        case TYPES.GET_USER_BY_ID_FAILURE:
            return {

            }
        // Follow user
        case TYPES.FOLLOW_USER_START:
            return {

            }
        case TYPES.FOLLOW_USER_SUCCESS:
            return {

            }
        case TYPES.FOLLOW_USER_FAILURE:
            return {

            }
        // UnFollow user
        case TYPES.UNFOLLOW_USER_START:
            return {

            }
        case TYPES.UNFOLLOW_USER_SUCCESS:
            return {

            }
        case TYPES.UNFOLLOW_USER_FAILURE:
            return {

            }
    }
}