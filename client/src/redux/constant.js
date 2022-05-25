export const INIT_STATE = {
    posts: {
        isLoading: false,
        data: []
    },
    auth: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    register: {
        isFetching: false,
        data: [],
        error: false
    }
}