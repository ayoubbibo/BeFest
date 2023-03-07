import axios from 'axios';



const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    json: true
});


export const getAllZones = () => {
    return client.get('/zones')
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}