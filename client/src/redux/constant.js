export const INIT_STATE = {
    posts: {
        isLoading: false,
        data: [],
        listPostsUser: [],
        error: false
    },
    auth: {
        currentUser: {},
        isLoading: false,
        message: '',
        data: {},
        error: false
    },
    user: {
        data: [],
        isLoading: false,
        message: '',
        isFollow: '',
        error: false,
    },
}