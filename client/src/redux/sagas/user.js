import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/user'
import * as apis from '../../api/userAPI'
import * as TYPES from '../constants/user'

function* findUsersSaga(action) {
    try {
        console.log('Search users running...')
        const res = yield call(apis.findUsers, {
            token: action.payload.token,
            query: action.payload.query
        })
        if (res.status == 200) {
            console.log('Search users successfully')
            yield put(actions.findUsersSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.findUsersFailure(error))
    }
}

function* getUserSaga(action) {
    try {
        console.log('Get user by id running...')
        const res = yield call(apis.getUserById, {
            token: action.payload.token,
            userId: action.payload.userId
        })
        if (res.status == 200) {
            console.log('Get user successfully')
            yield put(actions.getUserByIdSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.getUserByIdFailure(error))
    }
}

function* checkFollowSaga(action) {
    try {
        console.log('Check follow running...')
        const res = yield call(apis.checkFollowUser, {
            userId: action.payload.userId,
            currentUserId: action.payload.currentUserId
        })
        if (res.status == 200) {
            console.log('Check follow successfully')
            yield put(actions.checkFollowUserSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.checkFollowUserFailure(error))
    }
}

function* followUserSaga(action) {
    try {
        console.log('Follow user running...')
        const res = yield call(apis.followUser, {
            token: action.payload.token,
            userId: action.payload.userId,
            currentUserId: action.payload.currentUserId
        })
        if (res.status == 200) {
            console.log(res.data)
            yield put(actions.followUserSuccess())
        }
    } catch (error) {
        yield put(actions.followUserFailure(error))
    }
}

function* unFollowUserSaga(action) {
    try {
        console.log('UnFollow running...')
        const res = yield call(apis.unFollowUser, {
            token: action.payload.token,
            userId: action.payload.userId,
            currentUserId: action.payload.currentUserId
        })
        if (res.status == 200) {
            console.log('UnFollow successfully')
            yield put(actions.unFollowUserSuccess(res.data))
        }
    } catch (error) {
        yield put(actions.unFollowUserFailure(error))
    }
}

export default userSaga = [
    takeLatest(TYPES.FIND_USERS_START, findUsersSaga),
    takeLatest(TYPES.GET_USER_BY_ID_START, getUserSaga),
    takeLatest(TYPES.CHECK_FOLLOW_USER_START, checkFollowSaga),
    takeLatest(TYPES.FOLLOW_USER_START, followUserSaga),
    takeLatest(TYPES.UNFOLLOW_USER_START, unFollowUserSaga)
]