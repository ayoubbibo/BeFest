import axios from 'axios';


const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL+"/type-jeux",
    json: true
    });


export const getAllTypes = () => {
    return client.get('/').then(response => {
        return response.data;
    });
}