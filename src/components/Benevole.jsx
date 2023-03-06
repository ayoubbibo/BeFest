import '../styles/Benevole.css';
import Header from './Header';
import React, { useState} from 'react';
import AjouteBen from './AjouteBen';
import { ToastContainer } from 'react-toastify';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';




function Benevole(){

    const [listBen, setListBen] = useState([]);

    return(
        <div className="app">
            <Header></Header>
            <ToastContainer />


            <div className="ben-content">
                <AjouteBen
                    data={listBen}
                    setData={setListBen}
                ></AjouteBen>
                <div className="ben-container">
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
                            /*onInputChange={(event, newInputValue) => {
                                setZoneAffected({name: newInputValue});
                                }} 
                            */
                            id="controllable-states-demo"
                            options={listBen.map
                                (option => option.name)} 
                            sx={{ width: 400 }}
                            renderInput={(params) => <TextField {...params} label="Recherche Par Zones"/>}
                        />
                    </div>
                    <div className="ben-search-results">

                    </div>
                    <div className="ben-choosed-calendar">
                    
                    </div> 
                </div>
            </div>

        </div>
    )
}

export default Benevole;
  