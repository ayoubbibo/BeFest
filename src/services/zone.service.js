import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL+"/zones",
    json: true
    });
    
export const getAllZones = () => {
    return client.get('/');
}


export const deleteZone = (idZone) => {
    return client.delete('/zones/'+idZone)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}


export const updateZone = (info, obj) => {
    return client.put('/zones/'+info._id, obj)
        .then(res => {
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}


const ZoneService = {
    getAllZones,
}


export default ZoneService;
