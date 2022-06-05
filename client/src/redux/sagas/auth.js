import { takeLatest, call, put, delay } from 'redux-saga/effects'
import * as actions from '../actions/auth'
import * as api from '../../api/authAPI'
import * as TYPES from '../constants/auth'

function* fetchLoginSaga(action) {
    try {
        console.log('Fetching login running...')

        const res = yield call(api.login, action.payload)
        if (res.status == 200) {
            yield put(actions.loginSuccess(res.data))
        }
    } catch (error) {
        console.log(error)
        yield put(actions.loginError(error))
    }
}

function* registerSaga(action) {
    try {
        console.log('Register running...')

        const res = yield call(api.register, action.payload)
        if (res) {
            yield put(actions.registerSuccess(res.data))
        }
    } catch (error) {
        console.log(error)
        yield put(actions.registerError(error))
    }
}

function* editProfileSaga(action) {
    try {

    } catch (error) {

    }
}

export default authSaga = [
    takeLatest(TYPES.LOGIN_START, fetchLoginSaga),
    takeLatest(TYPES.REGISTER_START, registerSaga),
]