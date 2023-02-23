import './../styles/AjouteJeu.css';
import { Form, Button } from 'react-bootstrap';
import React, { useState} from 'react';
import Axios from 'axios';
import { toast } from 'react-toastify';


function AjouteJeu({data, setData, options, setajouteJeu}){

    const [nomJeu, setNomJeu] = useState('');
    const [typeJeu, setTypeJeu] = useState('');

    function ajoute_jeu(){
        const nvJeu = {
            name: nomJeu,
            type: typeJeu
        }
        Axios.post(`${process.env.REACT_APP_API_URL}/jeux`, {
            name: nvJeu.name,
            type: nvJeu.type
        })
        .then(res => {
            console.log(res.data);
            setData([...data, nvJeu]);
            toast.success('Le Jeu a bien été créée !', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setajouteJeu(true);
        })
        .catch(err => console.log(err));
    }

  return (
    <div className='ajoute_jeu_container'>
        <Form className="form_ajout">
            <Form.Group className="mb-3" >
                <img src={require("./../assets/Jeux.png")} alt={"jeux logo"}/>
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Control 
                    type="Text" 
                    placeholder="Entrer Le Nom du jeu" 
                    onChange={(e) => setNomJeu(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Select onChange={(e) => setTypeJeu(e.target.value)} placeholder="Choisir le type de jeu">
                    {
                        options.map((option) =>(
                            <option key={option._id}>{option.name}</option>
                            )   
                        )
                    }
                </Form.Select>
            </Form.Group>
            <Button variant="outline-success" onClick={() => ajoute_jeu()}>
                Ajouter Le jeu
            </Button>
        </Form>
    </div>
  );
};

export default AjouteJeu;