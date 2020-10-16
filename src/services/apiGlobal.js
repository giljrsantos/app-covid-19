import axios from 'axios';

const apiGlobal = axios.create({
    baseURL: 'https://covid19.mathdro.id'
});

export default apiGlobal;