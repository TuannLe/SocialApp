import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/post'
import * as api from '../../api/postAPI'
import * as TYPES from '../constants/post'

function* fetchPostSaga(action) {
    try {
        console.log('Fetching post running...')

        const posts = yield call(api.fetchPosts)
        if (posts.status == 200) {
            yield put(actions.getPostsSuccess(posts.data))
        }
    } catch (error) {
        console.log(error)
        yield put(actions.getPostsError(error))
    }
}

function* createPostSaga(action) {
    try {
        console.log('Creating post running...')
        const res = yield call(api.createPost, {
            token: action.payload.token,
            formData: action.payload.formData
        })
        if (res) {
            yield put(actions.createPostSuccess(res.data))
        }
    } catch (error) {
        console.log(error)
        yield put(actions.createPostError(error))
    }
}

export default postSaga = [
    takeLatest(TYPES.GET_POSTS_START, fetchPostSaga),
    takeLatest(TYPES.CREATE_POST_START, createPostSaga)
]

