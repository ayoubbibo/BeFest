import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL+"/jeux",
    json: true
    });


export const addJeu = (nomJeu, typeJeu) => {
    return client.post('/', {name: nomJeu, type: typeJeu});
}