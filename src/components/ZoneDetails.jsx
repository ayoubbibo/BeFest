import './../styles/ZoneDetails.css';
import ZoneNameOp from './ZoneNameOp';

function ZoneDetails({zone, setZoneClicked, zoneClicked}){
    return(
        <div className="zone-li-details-info">
            <ZoneNameOp zone={zone} setZoneClicked={setZoneClicked} zoneClicked={zoneClicked}/>
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
  