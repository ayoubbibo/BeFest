import '../styles/Jeux.css';
import Header from './Header';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

//import Axios from "axios";
//import { useEffect, useState } from 'react';

/**
 * this is the main component where the request for fetching data from the api is done
 * it containes the posts list
 */
function Jeux(){
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
}, [])
return(
        <div className="app">
            <Header></Header>
            <div className="ben-content">
                <div>
                    <Form>
                        <Form.Group className="mb-3" >
                            <img src="../assets/jeux_logo.png" alt="" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Nom du jeu</Form.Label>
                            <Form.Control type="Text" placeholder="Entrer Le Nom" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Type de jeu</Form.Label>
                            <Form.Select>

                            </Form.Select>
                        </Form.Group>
                    </Form>
                </div>

                <div>
                    <ul>
                        {
                            data.map((item, index) => {
                                <li key={item._id}>77</li>
                            })
                        }
                                
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Jeux;
  