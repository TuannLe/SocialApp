import { createActions } from "redux-actions";

export const login = createActions({
    loginStart: (payload) => payload,
    loginSuccess: (payload) => payload,
    loginFailure: (err) => err
})

// export const createAccount = createActions({
//     createAccountRequest: (payload) => payload,
//     createAccountSuccess: (payload) => payload,
//     createAccountFailure: (err) => err
// })