import '../styles/Jeux.css';
import Header from './Header';

//import Axios from "axios";
//import { useEffect, useState } from 'react';

/**
 * this is the main component where the request for fetching data from the api is done
 * it containes the posts list
 */
function Jeux(){
/*const [data, setData] = useState([]);
useEffect(() => {
    Axios.get('http://localhost:3000/api/posts')
    .then(res => { 
    //console.log("We got the data that we need ",res.data.posts)
    setData(res.data.posts);
    }
    )
    .catch(err => console.log(err));
}, [])*/
return(
        <div className="app">
            <Header></Header>
            <div className="container">
                bibi
            </div>
        </div>
    )
}

export default Jeux;
  