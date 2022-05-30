import AXIOS from './index'

const url = '/posts'

export const fetchPosts = async () => {
    try {
        const res = await AXIOS.get(url)
        return res
    } catch (error) {
        return error
    }
}

export const createPost = async ({ token, payload }) => {
    try {
        const res = await post(`${url}/create`, payload)
        return res
    } catch (error) {
        return error
    }
}

export const updatePost = async ({ token, payload }) => {
    try {
        const res = await post(`${url}/update`, payload)
        return res
    } catch (error) {
        return error
    }
}