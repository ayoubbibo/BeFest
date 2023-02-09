import '../styles/Zones.css';
import Header from './Header';
import axios from 'axios';
import { useEffect, useState } from 'react';


function Zones(){

const [data, setData] = useState([]);
useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/jeux`)
    .then(res => { 
            console.log("We got the data that we need ",res.data)
            setData(res.data);
            console.log(data);
        }
    )
    .catch(err => console.log(err));
}, [data])

return(
        <div className="app">
            <Header>

            </Header>
        </div>
    )
}

export default Zones;