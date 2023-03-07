import './../styles/CreneauToDetails.css';

export default function CreneauToDetails({creneau, setCreneauToDetail, setAffectationClicked, data, setData}) {
    return (
        <div className="creneau-details">
            <div className="creneau-details-header">
                <div className="creneau-details-header-name">
                    Détails du créneau
                </div>
                <div className="creneau-details-header-close" onClick={() => {
                    setAffectationClicked(false);
                    setCreneauToDetail([]);
                }}>
                    X
                </div>
            </div>
        </div>
    )
}
