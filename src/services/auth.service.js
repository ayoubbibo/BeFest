import axios from 'axios';

const client = axios.create({
    baseURL: process.env.REACT_APP_API_URL+"/auth",
    json: true
    });


const register = (firstname, lastname, email, password, role) => {
    return client.post('/signup', {
        firstname, 
        lastname, 
        email, 
        password, 
        role
    });
}


const login = (email, password) => {
    return client.post('/signin', {
        email, 
        password
    })
     .then(response => {
        if (response.data._id) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });
}


const logout = () => {
    localStorage.removeItem('user');
    return client.post('/signout');
}

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}


const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
  }
  
export default AuthService;