import axios from 'axios';

const URL = 'https://blog-app-test123.herokuapp.com';

export const fetchPosts = () => axios.get(`${URL}/posts`)