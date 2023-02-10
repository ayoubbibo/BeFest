import '../styles/Zones.css';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import ZoneDetails from './ZoneDetails';
import Axios from "axios";
import { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import Icons to Update and Delete 
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";


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


const [newZoneName, setNewZoneName] = useState('');

function addZone(event){
    event.preventDefault();
    Axios.post(`${process.env.REACT_APP_API_URL}/zones`, {
        name: newZoneName
    })
    .then(res => {
        console.log(res.data);    document.body.classList.add("fixed");
        toast.success('The Zone Is Created Succesfully!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        getZones();
    })
    .catch(err => console.log(err));
    setNewZoneName('');
}


const [zoneClicked, setZoneClicked] = useState(false);
const [zoneToDetail, setZoneToDetail] = useState({});

function showZoneDetails(zone){
    setZoneClicked(true);
    setZoneToDetail(zone);
}

return(
        <div className="app">
            
            {
                zoneClicked ? 
                    <div className="zone-details">
                        <ZoneDetails zone={zoneToDetail} setZoneClicked={setZoneClicked} /> 
                    </div>
                : null
            }
            <Header/>
            <div className="zones-container">
                    
                <div className="ajoute_zone_container">
                    <Form className="form_ajout">
                        <Form.Group className="mb-3">
                            <Form.Control 
                                type="Text" 
                                placeholder="Entrer Le Nom" 
                                className='zone-input-name'
                                value={newZoneName}
                                onChange={(event) => { setNewZoneName(event.target.value)}}
                            />
                            <ToastContainer />
                        </Form.Group>of
                        <Button variant="outline-success" type="submit" onClick={addZone}>
                            Ajouter La Zone
                        </Button>
                    </Form>
                </div>

                <div className="zones-content">    
                    <ul className='zones-list'>
                        {
                            data.map((zone) => (
                                <li key={zone._id} className="zone-li-info">
                                    <button className="zone-name"  onClick={() => 
                                        showZoneDetails(zone)}>
                                        <div>{zone.name}</div>
                                        <FontAwesomeIcon icon={faPen} className="edit-icon" onClick={() => {zone.name = "bibo"}}/>
                                        <FontAwesomeIcon icon={faTrash} className="delete-icon" />
                                    </button>
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