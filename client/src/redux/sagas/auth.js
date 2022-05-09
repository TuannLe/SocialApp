import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/auth'
import * as api from '../../api/authAPI'

function fetchLoginSaga(action) {
    try {
        const login = yield call(api.login, action.payload)
        console.log(login)
        yield put(actions.login.loginSuccess(login.data))
    } catch (error) {
        console.log(error)
        yield put(actions.login.loginFailure(error))
    }
}

function createAccountSaga(action) {
    try {
        const account = yield call(api.createAccount, action.payload)
        console.log(account)
        yield put(actions.createAccount.createAccountRequest(account.data))
    } catch (error) {
        console.log(error)
        yield put(actions.createAccount.createAccountFailure(error))
    }
}

function* authSaga() {
    yield takeLatest(actions.login.loginStart, fetchLoginSaga)
    yield takeLatest(actions.createAccount.createAccountRequest, createAccountSaga)
}

export default authSaga