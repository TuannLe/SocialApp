import axios from 'axios';

const URL = 'https://socialapp-multiverse.herokuapp.com';

export const fetchPosts = () => axios.get(`${URL}/posts`)