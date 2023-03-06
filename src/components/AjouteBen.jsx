import '../styles/AjouteBen.css';
import { Form, Button } from 'react-bootstrap';
import React, { useState} from 'react';
import { randomAvatar } from './AvatarGenerator';
import BenService from '../services/benevole.service';
import { toast } from 'react-toastify';


function Benevole({data, setData}){

const avatarUrl = randomAvatar();

// Creation des attributs d'un bénévole
const [nomBen, setNomBen] = useState("");
const [prenomBen, setPrenomBen] = useState("");
const [emailBen, setEmailBen] = useState("");


function ajouterBen(){
    const nvBen = {
        nom: nomBen,
        prenom: prenomBen,
        email: emailBen
    };

    
    BenService.createBen(nvBen)
    .then(response => {
        console.log(response.data);
        setData([...data, response.data]);
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
    }
    )
    .catch(e => {
        console.log(e);
        toast.error("Une erreur est survenue lors de l'ajout du bénévole");
    });
}


return(
    <div className="ajoute_ben_container">
        <Form className="form_ajout">
            <Form.Group className="mb-3">
                <img src={avatarUrl} className="avatar" alt="the avatar"/>                                
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Control type="Text" placeholder="Entrer Le Nom" 
                    onChange={(e) => setNomBen(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control type="Text" placeholder="Entrer Le Prénom" 
                    onChange={(e) => setPrenomBen(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Entrer L'Email" 
                    onChange={(e) => setEmailBen(e.target.value)}
                />
            </Form.Group>
            <Button variant="outline-success"
                onClick={() => ajouterBen()}
            >
                Ajouter Le Bénévole
            </Button>
        </Form>
    </div>
)
}

export default Benevole;
  