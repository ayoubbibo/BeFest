import '../styles/Benevole.css';
import Header from './Header';
import React, { useState} from 'react';
//import AjouteBen from './AjouteBen';
import { ToastContainer } from 'react-toastify';
import BenSearchBar from './BenSearchBar';
import BenResultList from './BenResultList';
import BenService from '../services/benevole.service';
import AffectationBenList from './AffectationBenList';



function Benevole(){

    const [listBen, setListBen] = useState([]);
    const [filterOn, setFilterOn] = useState(false);
    
    React.useEffect(() => {
        BenService.getAllBen()
        .then((response) => {
            setListBen(response.data);
        }
        )
        .catch((error) => {
            console.log(error);
        }
        );
    }, [])
    
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
                    <BenSearchBar listBen={listBen} filterOn={filterOn} setFilterOn={setFilterOn}/>
                    <div className="ben-content-container">
                        <div className="ben-search-results">
                            <BenResultList results={listBen}/>
                        </div>
                        <div className="ben-affectation-list">
                            <h1>Ben Affectation List</h1>
                            <AffectationBenList filterOn={filterOn}/>
                        </div>
                    </div> 
                </div>
            </div>

        </div>
    )
}

export default Benevole;
  