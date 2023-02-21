import '../styles/Jeux.css';
import Header from './Header';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import Axios from 'axios';
import { useEffect } from 'react';


function Jeux(){
    const [options, setOptions] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        getJeux();
    }, [])


    const getJeux = () => {
        Axios.get(`${process.env.REACT_APP_API_URL}/jeux`)
        .then(res => {
            console.log("We got the data that we need ",res.data)
            setData(res.data);
        })
        .catch(err => console.log(err));
        
        Axios.get(`${process.env.REACT_APP_API_URL}/type-jeux`)
        .then(res => {
            console.log("We got the data that we need ",res.data)
            setOptions(res.data);
        })
        .catch(err => console.log(err));
    }


    return(
        <div className="app">
            <Header></Header>
            <div className="ben-content">
                <div>
                    <Form className="form_ajout">
                        <Form.Group className="mb-3" >
                            <img src={require("./../assets/jeux_logo.png")} alt={"jeux logo"}/>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Nom du jeu</Form.Label>
                            <Form.Control type="Text" placeholder="Entrer Le Nom" />
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Type de jeu</Form.Label>
                            <Form.Select>
                                {
                                    options.map((option) =>(
                                        <option key={option._id}>{option.name}</option>
                                        )   
                                    )
                                }
                            </Form.Select>
                        </Form.Group>
                    </Form>
                </div>

                <div>
                    <ul>
                        {
                            data.map((jeu) =>(
                                <li key={jeu._id}>{jeu.name}</li>
                                )
                            )
                        }
                                
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Jeux;
  