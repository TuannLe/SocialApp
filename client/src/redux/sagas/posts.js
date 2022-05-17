import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions'
import * as api from '../../api/postAPI'

function* fetchPostSaga(action) {
    try {
        const posts = yield call(api.fetchPosts)
        yield put(actions.getPosts.getPostsSuccess(posts.data))
    } catch (error) {
        console.log(error)
        yield put(actions.getPosts.getPostsFailure(error))
    }
}

export default postSaga = [
    takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga)
]

