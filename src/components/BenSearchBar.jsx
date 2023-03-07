import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ZoneService from '../services/zone.service';
import '../styles/BenSearchBar.css';
import dayjs from 'dayjs';
import { SingleInputDateTimeRangeField } from '@mui/x-date-pickers-pro/SingleInputDateTimeRangeField';



export default function BenSearchBar({listBen,setFilterOn}) {

  const [nameOption, setNameOption] = React.useState([]);
  const [zoneOption, setZoneOption] = React.useState([]);

  const [selectedName, setSelectedName] = React.useState("Entrer le nom du Bénévole");
  const [selectedZone, setSelectedZone] = React.useState("Entrer le nom de la zone");
  const [selectedStartDate, setSelectedStartDate] = React.useState("");
  const [selectedEndDate, setSelectedEndDate] = React.useState("");

  React.useEffect(() => {
        ZoneService.getAllZones()
        .then((response) => {
                setZoneOption(response.data);
            }
        )
        .catch((error) => {
            console.log(error);
            }
        )
  }, [])

   
    React.useEffect(() => {
        // vider la liste des noms
        setNameOption([]);
        listBen.map((ben) => (
            setNameOption((nameOption) => [...nameOption, {name: ben.firstname + " " + ben.lastname}])   
        ))
    }, [listBen])

    const [value, setValue] = React.useState(() => [
        dayjs(),
        dayjs().add(1, 'day'),
      ]);

    React.useEffect(() => {
        if((selectedName !== null || selectedZone !== null) && ( 
            selectedName !== "Entrer le nom du Bénévole" || selectedZone !== "Entrer le nom de la zone")
            ){
            setFilterOn(true);
        }
        else{
            setFilterOn(false);
        }
    }, [selectedName,selectedZone])

  return (
    <div className="ben-search-fields">
        <div className="autoComplete">
            <Autocomplete
                value={selectedName}
                onChange={(event, newValue) => {
                    setSelectedName(newValue);
                }}
                /*onInputChange={(event, newInputValue) => {
                    setZoneAffected({name: newInputValue});
                    }} 
                */
                id="controllable-states-demo"
                options={nameOption.map
                    (option => option.name)} 
                sx={{ width: 400 }}
                renderInput={(params) => <TextField {...params} label="Recherche Par Nom"/>}
            />
            <Autocomplete
                value={selectedZone}
                onChange={(event, newValue) => {
                    setSelectedZone(newValue);
                }}
                /*
                    onInputChange={(event, newInputValue) => {
                        setZoneAffected({name: newInputValue});
                    }} 
                */
                id="controllable-states-demo"
                options={zoneOption.map
                    (option => option.name)} 
                sx={{ width: 400 }}
                renderInput={(params) => <TextField {...params} label="Recherche Par Zones"/>}
            />
        </div>
        
        <div className="datePicker">     
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer
                    components={[
                    'SingleInputDateTimeRangeField',
                    ]}
                >
                    <SingleInputDateTimeRangeField
                        label="Recherche par date"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                    />
                </DemoContainer>
            </LocalizationProvider>
        </div>     
    </div>  
  );
}
