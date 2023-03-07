import creneauxService from '../services/creneau.service';
import './../styles/AffectationBenList.css';
import React, { useState} from 'react';
import CreneauToDetails from './CreneauToDetails';

export default function AffectationBenList({filterOn}) { 
    const [listAffectation, setListAffectation] = useState([]);
    const [affectationClicked, setAffectationClicked] = useState(false);
    const [creneauToDetail, setCreneauToDetail] = useState([]);

    
    React.useEffect(() => {
        creneauxService.getAllCreneaux()
        .then((response) => {
            setListAffectation(response.data);
            console.table(response.data)
            console.table(response.data[0].benevoles)
        }
        )
        .catch((error) => {
            console.log(error);
        }
        );
    }, [])
    

    function DetailAffectation(creneau){
        setAffectationClicked(true);
        setCreneauToDetail(creneau);
    }

    // <ZoneDetails zone={zoneToDetail} setZoneToDetail={setZoneToDetail} setZoneClicked={setZoneClicked} index={zoneDetailsIndex} setData={setData} data={data}/>
    
    return (
        <div className="ben-result-list">
            {
                affectationClicked ? 
                    <div className="">
                        <CreneauToDetails 
                            creneau={creneauToDetail}
                            setCreneauToDetail={setCreneauToDetail}
                            setAffectationClicked={setAffectationClicked}
                            data={listAffectation}
                            setData={setListAffectation}
                        ></CreneauToDetails> 
                    </div>
                : null
            }
            <div className="table-wrapper">
                {!filterOn ? (
                    <table className="creneau-result">
                    <thead>
                        <tr>
                            <th>Bénévole</th>
                            <th>Date</th>
                            <th>Heure de début</th>
                            <th>Heure de fin</th>
                            <th>Zone</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listAffectation.map((creneau) =>
                        creneau.benevoles.map((benevole) => (
                            <tr
                                onClick={() => {
                                    DetailAffectation(creneau)
                                }}
                            >
                            <td className="benevole">{benevole.firstname} {benevole.lastname}</td>
                            <td className="date">{
                            creneau.date.substring(8,10) + "/" + creneau.date.substring(5,7) + "/" + creneau.date.substring(0,4)
                            
                            }</td>
                            <td className="heure">{creneau.heureDebut}</td>
                            <td className="heure">{creneau.heureFin}</td>
                            <td className="zone">zone</td>
                            </tr>
                        ))
                        )}
                    </tbody>
                    </table>
                ) : (
                    <h1>Filter Off</h1>
                )}
            </div>
        </div>
    );
}   
