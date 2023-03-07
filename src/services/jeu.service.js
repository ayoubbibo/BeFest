import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL+"/jeux",
    json: true
    });


export const addJeu = (nomJeu, typeJeu) => {
    return client.post('/', {name: nomJeu, type: typeJeu});
}


export const getAllJeux = () => {
    return client.get('/')
        .then(response => {
            return response.data;
        })
        .catch(error => {
            console.log(error);
        });
}


export const getJeuByZone = (idZone) => {
    return client.get('/zone/'+idZone)
        .then(res => {
            return res.data
            })
        .catch(err => {
            console.log(err)
            });
}


export const getJeuByType = (typeJeu) => {
    return client.get('/type/'+typeJeu);
}


export const updateJeu = (id, obj) => {
    return client.put('/'+id, obj)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}