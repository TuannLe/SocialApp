import AXIOS from './index'

const url = '/posts'

export const fetchPosts = async ({ token, userId }) => {
    console.log(userId)
    console.log(token)
    try {
        const res = await AXIOS.post(url,
            {
                userId: userId
            },
            {
                headers: {
                    'token': `Bearer ${token}`
                }
            })
        console.log(res)
        return res
    } catch (error) {
        return error
    }
}

export const createPost = async ({ token, formData }) => {
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