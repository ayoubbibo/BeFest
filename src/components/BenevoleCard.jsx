import {Card} from 'react-bootstrap';
import '../styles/BenevoleCard.css';


function BenevoleCard({id,nom,prenom,avatar})
{
    return(
        <li key={id}>
            <Card className="ben-li">
                <Card.Body className="ben-li-body">
                    <Card.Img variant="top" src={avatar} className="ben-cover__item"/>
                    <div>
                        <Card.Title>{nom}<br/>
                        </Card.Title>
                        <Card.Text>
                            {prenom}	
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>
        </li>
    )
}

export default BenevoleCard;