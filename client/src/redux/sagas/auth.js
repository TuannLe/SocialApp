import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/auth'
import * as api from '../../api/authAPI'

function* fetchLoginSaga(action) {
    try {
        const login = yield call(api.login, action.payload)
        if (login.status === 200) {
            yield put(actions.login.loginSuccess(login.data))
        }
    } catch (error) {
        console.log(error)
        yield put(actions.login.loginFailure(error))
    }
}

// function createAccountSaga(action) {
//     try {
//         const account = yield call(api.createAccount, action.payload)
//         console.log(account)
//         yield put(actions.createAccount.createAccountRequest(account.data))
//     } catch (error) {
//         console.log(error)
//         yield put(actions.createAccount.createAccountFailure(error))
//     }
// }

export default authSaga = [
    takeLatest(actions.login.loginStart, fetchLoginSaga),
    // takeLatest(actions.createAccount.createAccountRequest, createAccountSaga)
]