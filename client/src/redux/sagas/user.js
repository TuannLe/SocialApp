import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/user'
import * as api from '../../api/userAPI'

function* RegisterSaga(action) {
    try {
        const account = yield call(api.register, action.payload)
        if (account.status === 200) {
            yield put(actions.registerSuccess(account.data))
        }

    } catch (error) {
        // console.log(error)
        yield put(actions.registerError(error))
    }
}

export default userSaga = [
    takeLatest(actions.registerStart, RegisterSaga)
]