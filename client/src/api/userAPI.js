import AXIOS from './index'

export const register = async (payload) => {
    const res = await AXIOS.post(`/auth/register`, {
        firstName: payload.firstName,
        lastName: payload.lastName,
        phoneNumber: payload.phoneNumber,
        password: payload.crPassword,
        email: payload.crEmail,
    })
    console.log(res)
    return res
}