import '../styles/JeuCard.css';


function JeuCard({jeu, index}){
    console.table(jeu)
    return(
        <li className="jeu-card-li" key={index}>
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