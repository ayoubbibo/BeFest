import './../styles/ZoneDetails.css';

function ZoneDetails({zone, setZoneClicked}){
    return(
        <div className="zone-li-details-info">
            <button className="zone-name"  onClick={() => setZoneClicked(false)}>
                {zone.name}
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
        </div>   
    )
}

export default ZoneDetails;
  