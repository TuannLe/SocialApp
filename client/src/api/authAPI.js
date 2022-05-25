import AXIOS from './index'

export const login = async (payload) => {
    const res = await AXIOS.post(`/auth/login`, payload)
    return res
}
