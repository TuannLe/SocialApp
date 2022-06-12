import { takeLatest, call, put } from 'redux-saga/effects'
import * as actions from '../actions/post'
import * as api from '../../api/postAPI'
import * as TYPES from '../constants/post'

// Get posts saga
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

// Create post saga
function* createPostSaga(action) {
    try {
        console.log('Creating post running...')
        const res = yield call(api.createPost, {
            token: action.payload.token,
            formData: action.payload.formData,
        })
        if (res.status == 200) {
            console.log("Post success")
            yield put(actions.createPostSuccess(res.data))
            yield put(actions.getPostsStart({ userId: action.payload.UserId, token: action.payload.token }))
        }
    } catch (error) {
        console.log(error)
        yield put(actions.createPostError(error))
    }
}

// Edit post saga
function* editPostSaga(action) {
    try {
        console.log('Edit post running...')
        const res = yield call(api.updatePost, {
            token: action.payload.token,
            formData: action.payload.formData
        })
        if (res.status == 200) {
            console.log('Edit post succeeded')
            yield put(actions.updatePostSuccess(res.data))
        }
    } catch (error) {
        console.log(error)
        yield put(actions.updatePostError(error))
    }
}

// Delete post saga
function* deletePostSaga(action) {
    try {
        console.log('Delete post running...')
        const res = yield call(api.deletePost, {
            token: action.payload.token,
            postId: action.payload.postId
        })
        if (res.status == 200) {
            console.log('Delete post succeeded')
            yield put(actions.deletePostSuccess(res.data))
        }
    } catch (error) {
        console.log(error)
        yield put(actions.deletePostError(error))
    }
}

// Like, disLike post saga
function* likePostSaga(action) {
    try {
        console.log('Like post running...')
        const res = yield call(api.likePost, {
            token: action.payload.token,
            userId: action.payload.userId,
            postId: action.payload.postId
        })
        if (res.status == 200) {
            console.log(res.data)
            yield put(actions.likePostSuccess())
        }
    } catch (error) {
        console.log(error)
        yield put(actions.likePostError(error))
    }
}

export default postSaga = [
    takeLatest(TYPES.GET_POSTS_START, fetchPostSaga),
    takeLatest(TYPES.CREATE_POST_START, createPostSaga),
    takeLatest(TYPES.UPDATE_POST_START, editPostSaga),
    takeLatest(TYPES.DELETE_POST_START, deletePostSaga),
    takeLatest(TYPES.LIKE_POST_START, likePostSaga)
]

