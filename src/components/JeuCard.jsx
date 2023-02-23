import '../styles/JeuCard.css';
import Axios from 'axios';
import { useEffect } from 'react';

function JeuCard({  jeu, index,setJeuClicked, setJeuToDetail, setJeuDetailsIndex}){
    const handleClick = () => {
        setJeuClicked(true);
        setJeuDetailsIndex(index);
    }

    useEffect (() => {
        Axios.get(`${process.env.REACT_APP_API_URL}/zones/jeu/${jeu._id}`)
        .then(res => {
            console.log(res.data);
            // add the zone to the jeu
            // create a new object to avoid mutating the state
            const reqObj = { ...jeu, zone: res.data };
            // update the jeu in the state
            setJeuToDetail(reqObj);
            console.log(reqObj);
        }
        )
        .catch(err => console.log(err));
    })
    

 return(
        <li className="jeu-card-li" key={index} onClick={handleClick}>
            <div className="jeu-card-content">
                <div className="jeu-card-name">
                    <div className="jeu-card-name-text"> Nom du jeu </div>
                    <span> {jeu.name}   </span>
                </div>
                <div className="jeu-card-type">
                    <div className="jeu-card-type-text"> Type du jeu </div>
                    <span> {jeu.type} </span>
                </div> 
            </div>
        </li>
    )
}

export default JeuCard;