import '../styles/Jeux.css';
import Header from './Header';
import { useState } from 'react';
import Axios from 'axios';
import { useEffect } from 'react';
import AjouteJeu from './AjouteJeu';
import { ToastContainer} from 'react-toastify';
import JeuCard from './JeuCard';
import JeuDetails from './JeuDetails';


function Jeux(){
    
    const [data, setData] = useState([]);
    const [JeuTypeOptions, setJeuTypeOptions] = useState([]);
    const [jeuClicked, setJeuClicked] = useState(false);
    const [jeuToDetail, setJeuToDetail] = useState({});
    const [jeuDetailsIndex, setJeuDetailsIndex] = useState(0);

    useEffect(() => {
        getJeux();
    }, [])

    const getJeux = () => {
        Axios.get(`${process.env.REACT_APP_API_URL}/jeux`)
        .then(res => {
            console.log("We got the data that we need ",res.data)
            setData(res.data);
        })
        .catch(err => console.log(err));
        
        Axios.get(`${process.env.REACT_APP_API_URL}/type-jeux`)
        .then(res => {
            console.log("We got the data that we need ",res.data)
            setJeuTypeOptions(res.data);
        })
        .catch(err => console.log(err));
    }
   
    return(
        <div className="app">
            {
                jeuClicked ? 
                    <div className="jeu-details">
                        <JeuDetails 
                            jeu={jeuToDetail}
                            setJeuToDetail={setJeuToDetail}
                            setJeuClicked={setJeuClicked} 
                            index={jeuDetailsIndex}
                            options={JeuTypeOptions}
                            data={data}
                            setData={setData}
                        /> 
                    </div>
                : null
            }
            <ToastContainer />
            <Header></Header>
            <div className="jeu-content">
                <AjouteJeu data={data} setData={setData} options={JeuTypeOptions}></AjouteJeu>
                <div className='jeu-list-container'>
                    <ul className='jeu-list'>
                        {
                            data.map((jeu,index) =>(
                                <JeuCard key={index} jeu={jeu}
                                    onClick={() => {
                                        setJeuClicked(true);
                                        setJeuToDetail(jeu);
                                        setJeuDetailsIndex(index);
                                    }}
                                ></JeuCard>
                                )
                            )
                        }       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Jeux;
  