import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MultiInputDateTimeRangeField } from '@mui/x-date-pickers-pro/MultiInputDateTimeRangeField';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Axios from 'axios';

export default function BenSearchBar({listBen}) {

  const [nameOption, setNameOption] = React.useState('');
  const [zoneOption, setZoneOption] = React.useState('');

  React.useEffect(() => {
    // get all the zone names from the api
    Axios.get(`${process.env.REACT_APP_API_URL}/zones`)
      .then(res => {
        setZoneOption([...res.data]);
      }
      )
      .catch(err => {
        console.log(err);
      }
      );
  }, [])


  return (
    <div className="ben-search-fields">
        <Autocomplete
            value="Entrer le nom du Bénévole"
            onChange={(event, newValue) => {
                
            }}
            /*onInputChange={(event, newInputValue) => {
                setZoneAffected({name: newInputValue});
                }} 
            */
            id="controllable-states-demo"
            options={listBen.map
                (option => option.name)} 
            sx={{ width: 400 }}
            renderInput={(params) => <TextField {...params} label="Recherche Par Nom"/>}
        />
        <Autocomplete
            value="Entrer le nom de la zone"
            onChange={(event, newValue) => {
                
            }}
            /*
                onInputChange={(event, newInputValue) => {
                    setZoneAffected({name: newInputValue});
                }} 
            */
            id="controllable-states-demo"
            options={listBen.map
                (option => option.name)} 
            sx={{ width: 400 }}
            renderInput={(params) => <TextField {...params} label="Recherche Par Zones"/>}
        />

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer
                components={[
                'MultiInputDateTimeRangeField',
                ]}
            >
                <MultiInputDateTimeRangeField
                    slotProps={{
                        textField: ({ position }) => ({
                        label: position === 'start' ? 'Debut' : 'Fin',
                    }),
                }}
                />
            </DemoContainer>
        </LocalizationProvider>     
    </div>  
  );
}
