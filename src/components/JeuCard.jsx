import '../styles/JeuCard.css';


function JeuCard({jeu, index}){
    console.table(jeu)
    return(
        <li className="jeu-card-li" key={index}>
            <div className="jeu-card-content">
                <div className="jeu-card-header">
                    {jeu.name}
                </div>
                <div className="jeu-card-body">
                    {jeu.type}
                </div> 
            </div>
        </li>
    )
}

export default JeuCard;