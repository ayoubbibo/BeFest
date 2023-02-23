import React, { useEffect, useRef } from 'react';
import './../styles/ZoneDetails.css';
import ZoneNameOp from './ZoneNameOp';

function ZoneDetails({zone, setZoneToDetail, setZoneClicked, index, setData, data}) {
  const detailsRef = useRef(null);

  
  function showZoneDetails(){
    setZoneClicked(false);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        showZoneDetails();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="zone-li-details-info" ref={detailsRef}>
      <ZoneNameOp
        zone={zone}
        setZoneToDetail={setZoneToDetail}
        setZoneClicked={setZoneClicked}
        index={index}
        setData={setData}
        data={data}
      />
      <div className="zone-jeux">
        <ul className="zone-jeux-list">
          {zone.jeux.map((jeu) => (
            <li key={jeu._id} className="zone-jeux-li-info">
              {jeu.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ZoneDetails;