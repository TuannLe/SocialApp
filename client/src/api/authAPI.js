import axios from 'axios';
import { login } from '../redux/actions/auth'

const URL = 'https://socialapp-multiverse.herokuapp.com';

export const login = (payload) => axios.post(`${URL}/auth/login`, payload)
export const createAccount = (payload) => axios.post(`${URL}/auth/register`, payload)