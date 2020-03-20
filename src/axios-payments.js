import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://payture-test.firebaseio.com/'
})

export default instance;