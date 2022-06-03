import AXIOS from './index'

const url = '/posts'

export const fetchPosts = async ({ token }) => {
    try {
        const res = await AXIOS.get(url, {
            headers: {
                'token': `Bearer ${token}`
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const createPost = async ({ token, formData }) => {
    console.log(formData)
    try {
        const res = await AXIOS.post(`${url}/create`, formData, {
            headers: {
                'token': `Bearer ${token}`,
                'Content-Type': `multipart/form-data`,
            }
        })
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

export const updatePost = async ({ token, payload }) => {
    try {
        const res = await AXIOS.post(`${url}/update`, payload)
        return res
    } catch (error) {
        return error
    }
}