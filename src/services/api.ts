import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://zippia-test-api.herokuapp.com/test',
});
