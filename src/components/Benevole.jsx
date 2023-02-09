import '../styles/Benevole.css';
import '../styles/BenevoleCard.css';
import Header from './Header';
import { Form, Button } from 'react-bootstrap';
import React, { useState} from 'react';
import {Card} from 'react-bootstrap';
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';


//import Axios from "axios";
//import { useEffect, useState } from 'react';

/**
 * this is the main component where the request for fetching data from the api is done
 * it containes the posts list
 */
function Benevole(){
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


const topType = ['NoHair', 'Eyepatch', 'Hat', 'Hijab', 'Turban', 'WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4', 'LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 'LongHairCurvy', 'LongHairDreads', 'LongHairFrida', 'LongHairFro', 'LongHairFroBand', 'LongHairNotTooLong', 'LongHairShavedSides', 'LongHairMiaWallace', 'LongHairStraight', 'LongHairStraight2', 'LongHairStraightStrand', 'ShortHairDreads01', 'ShortHairDreads02', 'ShortHairFrizzle', 'ShortHairShaggyMullet', 'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved', 'ShortHairSides', 'ShortHairTheCaesar', 'ShortHairTheCaesarSidePart'];
const accessoriesType = ['Blank', 'Kurt', 'Prescription01', 'Prescription02', 'Round', 'Sunglasses', 'Wayfarers'];
const hairColor = ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'PastelPink', 'Platinum', 'Red', 'SilverGray'];
const facialHairType = ['Blank', 'BeardMedium', 'BeardLight', 'BeardMagestic', 'MoustacheFancy', 'MoustacheMagnum'];
const facialHairColor = ['Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'Platinum', 'Red'];
const clotheType = ['BlazerShirt', 'BlazerSweater', 'CollarSweater', 'GraphicShirt', 'Hoodie', 'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck'];
const clotheColor = ['Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 'Red', 'White'];
const eyeType = ['Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts', 'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky'];
const eyebrowType = ['Angry', 'AngryNatural', 'Default', 'DefaultNatural', 'FlatNatural', 'RaisedExcited', 'RaisedExcitedNatural', 'SadConcerned', 'SadConcernedNatural', 'UnibrowNatural', 'UpDown', 'UpDownNatural'];

// Create a function to generate random avatar
function randomAvatar() {
    const topType1 = topType[Math.floor(Math.random() * topType.length)];
    const accessoriesType1 = accessoriesType[Math.floor(Math.random() * accessoriesType.length)];
    const hairColor1 = hairColor[Math.floor(Math.random() * hairColor.length)];
    const facialHairType1 = facialHairType[Math.floor(Math.random() * facialHairType.length)];
    const facialHairColor1 = facialHairColor[Math.floor(Math.random() * facialHairColor.length)];
    const clotheType1 = clotheType[Math.floor(Math.random() * clotheType.length)];
    const clotheColor1 = clotheColor[Math.floor(Math.random() * clotheColor.length)];
    const eyeType1 = eyeType[Math.floor(Math.random() * eyeType.length)];
    const eyebrowType1 = eyebrowType[Math.floor(Math.random() * eyebrowType.length)];
    const avatarUrl = `https://avataaars.io/?avatarStyle=Circle&topType=${topType1}&accessoriesType=${accessoriesType1}&hairColor=${hairColor1}&facialHairType=${facialHairType1}&facialHairColor=${facialHairColor1}&clotheType=${clotheType1}&clotheColor=${clotheColor1}&eyeType=${eyeType1}&eyebrowType=${eyebrowType1}`;
    return avatarUrl;
}


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
  