import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL+"/creneaux",
    json: true
    });
    
const getAllCreneaux = () => {
    return client.get('/');
}

const getCreneauByBenID = id => {
    return client.get(`/${id}`);
}

const creneauxService = {
    getAllCreneaux
}


export default creneauxService;