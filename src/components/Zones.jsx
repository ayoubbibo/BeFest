import '../styles/Zones.css';
import Header from './Header';
import Axios from "axios";
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Zones(){

const [data, setData] = useState([]);

useEffect(() => {
    getZones();
}, [])

const getZones = () => {
    Axios.get(`${process.env.REACT_APP_API_URL}/zones`)
    .then(res => {
        console.log("We got the data that we need ",res.data)
        setData(res.data);
    })
    .catch(err => console.log(err));
}

return(
        <div className="app">
            <Header/>
            <div className="zones-container">
                    
                <div className="ajoute_zone_container">
                    <Form className="form_ajout">
                        <Form.Group className="mb-3">
                            <Form.Control type="Text" placeholder="Entrer Le Nom" className='zone-input-name'/>
                        </Form.Group>
                        <Button variant="outline-success" type="submit">
                            Ajouter La Zone
                        </Button>
                    </Form>
                </div>

                <div className="zones-content">    
                    <ul className='zones-list'>
                        {
                            data.map((zone) => (
                                <li key={zone._id} className="zone-li-info">
                                    <div className="zone-name">
                                        {zone.name}
                                    </div>
                                    <div className="zone-jeux">
                                        <ul className="zone-jeux-list">
                                            {
                                                zone.jeux.map((jeu) => (
                                                    <li key={jeu._id} className="zone-jeux-li-info">
                                                        {jeu.name}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Zones;