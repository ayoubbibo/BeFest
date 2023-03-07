import axios from 'axios';


const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL+"/zones",
    json: true
    });
    
const getAllZones = () => {
    return client.get('/');
}

const ZoneService = {
    getAllZones,
}


export default ZoneService;
