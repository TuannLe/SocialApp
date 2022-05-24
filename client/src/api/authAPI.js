import AXIOS from './index'

export const login = async (payload) => {
    const res = await AXIOS.post(`/auth/login`, payload)
    return res
}
export const register = async (payload) => {
    const res = await AXIOS.post(`/auth/register`, payload)
    return res
}
// export const createAccount = (payload) => axios.post(`${URL}/auth/register`, payload)