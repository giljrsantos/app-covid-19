import axios from 'axios';

const apiPaises = axios.create({
    baseURL: 'https://covid19.mathdro.id/api/countries/'
});

export default apiPaises;