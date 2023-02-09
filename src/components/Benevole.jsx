import '../styles/Benevole.css';
import '../styles/BenevoleCard.css';
import Header from './Header';
import { Form, Button } from 'react-bootstrap';
import React, { useState} from 'react';
import {Card} from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import { randomAvatar } from './AvatarGenerator';

function Benevole(){

// create the url for the avatar
const avatarUrl = randomAvatar();

// Create a list that will contains a list of volunteers 
const [list, setList] = useState(
[
    {
        id: 1,
        nom: "Ben",
        prenom: "Moussa",
        email: "ben.moussa@gmail.com"
    },
    {
        id: 2,
        nom: "bibo",
        prenom: "ahmed",
        email: "ben.moussa@gmail.com"
    },
    {
        id: 3,
        nom: "Ben",
        prenom: "Moussa",
        email: "ben.moussa@gmail.com"
    },
    {
        id: 4,
        nom: "Ben",
        prenom: "Moussa",
        email: "ben.moussa@gmail.com"
    }
]
)

const [zones, setZones] = useState([]);

function handleOnDragEnd(result){
    console.log(result);
    if(!result.destination) return;
    const items = Array.from(list);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setList(items);

    if (result.destination.droppableId === "zones") {
        // push the item to the zones
        const zonesList = Array.from(zones);
        zonesList.push(reorderedItem);
        setZones(zonesList);
    }
}

return(
        <div className="app">
            <Header></Header>
            <div className="ben-content">
                <div className="ajoute_ben_container">
                    <Form className="form_ajout">
                        <Form.Group className="mb-3">
                            <img src={avatarUrl} className="avatar" alt="the avatar"/>                                
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control type="Text" placeholder="Entrer Le Nom" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="Text" placeholder="Entrer Le Prénom" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Entrer L'Email" />
                        </Form.Group>
                        <Button variant="outline-success" type="submit">
                            Ajouter Le Bénévole
                        </Button>
                    </Form>
                </div>

                <div className="liste_ben_container">
                    <DragDropContext onDragEnd={handleOnDragEnd}>    
                        <Droppable droppableId="benev">
                            {(provided) => (
                                <ul className="ben_cards" {...provided.droppableProps} ref={provided.innerRef}>
                                {
                                    list.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id+item.nom} index={index}>    
                                            {(provided) => (
                                                <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                    <Card className="ben-li">
                                                        <Card.Body className="ben-li-body">
                                                            <Card.Img variant="top" src={avatarUrl} className="ben-cover__item" alt="The image is clear"/>
                                                            <div>
                                                                <Card.Title>{item.nom}<br/>
                                                                </Card.Title>
                                                                <Card.Text>
                                                                    {item.prenom}	
                                                                </Card.Text>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </li>
                                            )}
                                        </Draggable>
                                    ))
                                }
                                {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                        <Droppable  droppableId="zones" className="cont">
                            {(provided) => (
                                <ul className="cont" {...provided.droppableProps} ref={provided.innerRef}>
                                {
                                    zones.map((item, index) => (
                                        <Draggable key={item.id} draggableId={item.id+item.nom} index={index}>    
                                            {(provided) => (
                                                <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                    <Card className="ben-li">
                                                        <Card.Body className="ben-li-body">
                                                            <Card.Img variant="top" src={avatarUrl} className="ben-cover__item" alt="The image is clear"/>
                                                            <div>
                                                                <Card.Title>{item.nom}<br/>
                                                                </Card.Title>
                                                                <Card.Text>
                                                                    {item.prenom}	
                                                                </Card.Text>
                                                            </div>
                                                        </Card.Body>
                                                    </Card>
                                                </li>
                                            )}
                                        </Draggable>
                                    ))
                                }
                                {provided.placeholder}
                                </ul>
                            )}
                            
                        </Droppable>
                    </DragDropContext>
                </div>
            </div>
        </div>
    )
}

export default Benevole;
  