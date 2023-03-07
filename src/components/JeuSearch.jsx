import SpecialButton from './SpecialButton';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { useEffect } from 'react';
import { getAllTypes } from '../services/type-jeux.service';
import { getAllZones } from '../services/zone.service';
import { getAllJeux, getJeuByZone } from '../services/jeu.service';
import FormControl from '@mui/material/FormControl';



function JeuSearch({setData, data}){

    const [search, setSearch] = useState("");
    const [type, setType] = useState("");
    const [zone, setZone] = useState("");
    const [typesJeux, setTypesJeux] = useState([]);
    const [zoneJeux, setZoneJeux] = useState([]);


    useEffect(() => {
        getAllTypes()
            .then(data => setTypesJeux(data));

        getAllZones()
            .then(data => setZoneJeux(data));
    }, [])

    

    const searchJeu = () => {
        if(search === "" && type === "" && zone === "") {
            getAllJeux()
                .then(data => setData(data));
        }
        if(zone !== ""){
            getJeuByZone(zone)
                .then(data => {
                    data = data.filter((jeu) => {
                        return jeu.name.toLowerCase().startsWith(search.toLowerCase()) && (type === "" || jeu.type === type);
                    });
                    setData(data);
                });
            }
        else{
            setData(data.filter((jeu) => {
                return jeu.name.toLowerCase().startsWith(search.toLowerCase()) && (type === "" || jeu.type === type);
            }));
        }   
    }

    const handleTypeChange = (e) => {
        setType(e.target.value);
    }

    const handleZoneChange = (e) => {
        setZone(e.target.value);
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }
            


    return (
        <div style={{width: "auto", display: "flex", direction: "row", marginLeft: "auto", marginRight: "auto", padding: "20px"}}>
            <div style={{marginRight: "10px"}}>
                <TextField id="outlined-basic" label="Nom du jeu" variant="outlined" value={search} onChange={handleChange} />
            </div>
            
            <div style={{marginRight: "10px", minWidth: "30px"}}>
                <FormControl>
                    <InputLabel id="type-label">Type</InputLabel>
                    <Select
                        id="type-select"
                        labelId="type-label"
                        sx={{minWidth: "100px"}}
                        value={type}
                        onChange={handleTypeChange}
                        label="Type"
                    >
                        <MenuItem value="">Tous</MenuItem>
                        {
                            typesJeux && typesJeux.map((type) => {
                                return <MenuItem value={type.name} key={type._id}>{type.name}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
            </div>

            <div style={{marginRight: "10px", minWidth: "60px"}}>
                <FormControl>
                    <InputLabel id="zone-label">Zone</InputLabel>
                    <Select
                        id="zone-select"
                        labelId="zone-label"
                        label="Zone"
                        sx={{minWidth: "100px"}}
                        value={zone}
                        onChange={handleZoneChange}
                    >
                        <MenuItem value="">Toutes</MenuItem>
                        {
                            zoneJeux.map((zone) => {
                                return <MenuItem value={zone._id} key={zone._id}>{zone.name}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>
                
            </div>
            
            <div className="jeu-search-btn">
                <SpecialButton text={"Rechercher"} onClick={searchJeu} />
            </div>
        </div>
    )
}


export default JeuSearch