import AXIOS from './index'

export const fetchPosts = () => AXIOS.get(`/posts`)
export const createPost = (payload) => AXIOS.post(`/posts`, payload)
export const updatePost = (payload) => AXIOS.post(`/posts/update`, payload)
