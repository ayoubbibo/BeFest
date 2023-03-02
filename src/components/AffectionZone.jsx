import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Axios from 'axios';
import '../styles/AffectationZone.css';
import ValidateUpdate from './ValidateUpdate';

export default function AffectionZone({jeu}) {
  
  const [zoneAffected, setZoneAffected] = React.useState({});
  const [opt, setOpt] = React.useState([]);
  const [newZoneAffected, setNewZoneAffected] = React.useState({});
  const [affectationValidated, setAffectationValidated] = React.useState(false);
  const [zoneName, setZoneName] = React.useState("");
  
  
  React.useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/zones/jeu/${jeu._id}`)
      .then(res => {
        // si on récupère un tableau vide, on met dans zone Affecté un name aucune zone affecté
        if (res.data === null) {
            setZoneAffected({name: 'Aucune zone affectée', _id: '12345',jeux: []});
            setZoneName('Aucune zone affectée');
          }
        else {
            setZoneAffected(res.data);
            setZoneName(res.data.name);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [jeu]);

  React.useEffect(() => {
    // get all the zone names from the api
    Axios.get(`${process.env.REACT_APP_API_URL}/zones`)
      .then(res => {
        setOpt([...res.data, { name: 'Aucune zone affectée', _id: '12345',jeux: []}]);
      }
      )
      .catch(err => {
        console.log(err);
      }
      );
  }, [])


  const affecteToZone = (zone) => {
    // get the zone id from the name in the table opt
    const zoneId = opt.find(z => z.name === zone)._id;
    const newZone = {name: zone, _id: zoneId, jeux: opt.find(z => z.name === zone).jeux};
    setNewZoneAffected(newZone);
    setZoneName(zone);
    setAffectationValidated(true);
  }




  return (
    <div className='affectation-to-zone'>
      {
        affectationValidated ? 
          <div className="zone-update-Validator">
            <ValidateUpdate type="jeux" operation="add"
              info={newZoneAffected}
              data={zoneAffected}
              setUpdateValidated={setAffectationValidated}
              index={jeu}
            />
          </div>
        : null
      }
      <Autocomplete
        value={
          zoneName === 'Aucune zone affectée' ? 'Aucune zone affectée' : zoneName
        }
        onChange={(event, newValue) => {
          affecteToZone(newValue);
        }}
        /*onInputChange={(event, newInputValue) => {
            setZoneAffected({name: newInputValue});
          }} 
        */
        id="controllable-states-demo"
        options={opt.map
          (option => option.name)} 
        sx={{ width: 400 }}
        renderInput={(params) => <TextField {...params} label="Affecté à une zone"/>}
      />
      <div className='Affected'>
        <h2>ZONE</h2>
        {
          zoneName === 'Aucune zone affectée' ? 'Aucune zone affectée' : zoneName 
        }
      </div>
    </div>
  );
}