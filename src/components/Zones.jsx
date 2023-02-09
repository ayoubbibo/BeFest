import '../styles/Zones.css';
import Header from './Header';
import axios from 'axios';
import { useEffect, useState } from 'react';


//import Axios from "axios";
//import { useEffect, useState } from 'react';

/**
 * this is the main component where the request for fetching data from the api is done
 * it containes the posts list
 */
function Zones(){
/*const [data, setData] = useState([]);
useEffect(() => {
    Axios.get('http://localhost:3000/api/posts')
    .then(res => { 
    //console.log("We got the data that we need ",res.data.posts)
    setData(res.data.posts);
    }
    )useEffect
    .catch(err => console.log(err));
}, [])*/

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