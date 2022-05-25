import AXIOS from './index'

export const register = async (payload) => {
    const res = await AXIOS.post(`/auth/register`, payload)
    return res
}