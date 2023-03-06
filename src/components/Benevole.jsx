import '../styles/Benevole.css';
import Header from './Header';
import React, { useState} from 'react';
//import AjouteBen from './AjouteBen';
import { ToastContainer } from 'react-toastify';
import BenSearchBar from './BenSearchBar';




function Benevole(){

    const [listBen, setListBen] = useState([]);

    return(
        <div className="app">
            <Header></Header>
            <ToastContainer />
            <div className="ben-content">                
                {
                    /*
                        <AjouteBen
                        data={listBen}
                        setData={setListBen}
                        ></AjouteBen>
                    */
                }
                <div className="ben-container">
                    <BenSearchBar listBen={listBen}/>
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
  