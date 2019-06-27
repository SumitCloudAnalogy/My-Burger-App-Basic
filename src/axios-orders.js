import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://angularexample-fd759.firebaseio.com/'
});

export default instance;
