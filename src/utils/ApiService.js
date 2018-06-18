import axios from 'axios';

export default function ApiService(config) {
    return axios(config);
}