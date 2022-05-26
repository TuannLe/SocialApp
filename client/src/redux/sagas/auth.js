import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/auth'
import * as api from '../../api/authAPI'

function* fetchLoginSaga(action) {
    try {
        const login = yield call(api.login, action.payload)
        if (login.status === 200) {
            console.log('Login success')
            yield put(actions.loginSuccess(login.data))
        }
    } catch (error) {
        console.log(error)
        yield put(actions.loginError(error))
    }
}

export default authSaga = [
    takeLatest(actions.loginStart, fetchLoginSaga),
]