import AXIOS from './index'

const url = '/posts'

export const fetchPosts = async ({ token, userId }) => {
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

export const updatePost = async ({ token, formData }) => {
    try {
        const res = await AXIOS.post(`${url}/update`, formData, {
            headers: {
                'token': `Bearer ${token}`,
                'Content-Type': `multipart/form-data`,
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const deletePost = async ({ token, postId }) => {
    try {
        const res = await AXIOS.delete(`${url}/${postId}`, {
            headers: {
                'token': `Bearer ${token}`,
                'Content-Type': `multipart/form-data`,
            }
        })
        return res
    } catch (error) {
        return error
    }
}

export const likePost = async ({ token, postId, userId }) => {
    try {
        console.log(token)
        console.log('postId', postId)
        console.log('userId', userId)
        const res = await AXIOS.put(`${url}/${postId}/like`,
            {
                userId: userId,
            }, {
            headers: {
                'token': `Bearer ${token}`,
            }
        })
        return res
    } catch (error) {
        return error
    }
}