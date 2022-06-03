import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/post'
import * as api from '../../api/postAPI'
import * as TYPES from '../constants/post'

function* fetchPostSaga(action) {
    try {
        console.log('Fetching post running...')

        const posts = yield call(api.fetchPosts, {
            token: action.payload.token,
            userId: action.payload.userId,
        })
        if (posts.status == 200) {
            console.log('getPostsSuccess')
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
            formData: action.payload.formData,
        })
        if (res.status == 200) {
            console.log("Post success")
            console.log(res.data)
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

