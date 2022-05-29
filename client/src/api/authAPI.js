import AXIOS from './index'

export const login = async (payload) => {
    try {
        const res = await AXIOS.post(`/auth/login`, payload)
        console.log(res)
        return res
    } catch (error) {
        return error
    }
}

export const register = async (payload) => {
    try {
        console.log(payload)
        const res = await AXIOS.post(`/auth/register`, {
            firstName: payload.firstName,
            lastName: payload.lastName,
            phoneNumber: payload.phoneNumber,
            password: payload.crPassword,
            email: payload.crEmail,
        })
        return res
    } catch (error) {
        return error
    }
}

