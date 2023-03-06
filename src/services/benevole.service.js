import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL+"/benevoles",
    json: true
    });
    
const getAllBen = () => {
    return client.get('/');
}

const getBenById = id => {
    return client.get(`/${id}`);
}

const createBen = data => {
    return client.post('/', data);
}

const updateBen = (id, data) => {
    return client.put(`/${id}`, data);
}

const deleteBen = id => {
    return client.delete(`/${id}`);
}

const BenService = {
    getAllBen,
    getBenById,
    createBen,
    updateBen,
    }


export default BenService;