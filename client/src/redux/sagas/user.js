import { takeLatest, call, put } from 'redux-saga/effects'
import * as ACTIONS from '../actions/user'
import * as API from '../../api/userAPI'

function* createAccountSaga(action) {
    try {
        const account = yield call(API.register, action.payload)
        if (register.status === 200) {
            console.log("Register success!!")
            yield put(ACTIONS.registerSuccess(register.data))
        }
    } catch (error) {
        console.log(error)
        yield put(ACTIONS.registerError(error))
    }
}

export default userSaga = [
    takeLatest(ACTIONS.registerStart, createAccountSaga)
]