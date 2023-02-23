import '../styles/Jeux.css';
import Header from './Header';
import { useState } from 'react';
import Axios from 'axios';
import { useEffect } from 'react';
import AjouteJeu from './AjouteJeu';
import { ToastContainer} from 'react-toastify';
import JeuCard from './JeuCard';
import JeuDetails from './JeuDetails';
import Loader from './Loader';


function Jeux(){
    
    const [data, setData] = useState([]);
    const [JeuTypeOptions, setJeuTypeOptions] = useState([]);
    const [ajouteJeu, setajouteJeu] = useState(false);
    const [jeuClicked, setJeuClicked] = useState(false);
    const [jeuToDetail, setJeuToDetail] = useState({});
    const [jeuDetailsIndex, setJeuDetailsIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getJeux();
    }, [])

    const getJeux = () => {
        setLoading(true);
        Axios.get(`${process.env.REACT_APP_API_URL}/jeux`)
        .then(res => {
            console.log("We got the data that we need ",res.data)
            setData(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
        
        Axios.get(`${process.env.REACT_APP_API_URL}/type-jeux`)
        .then(res => {
            console.log("We got the data that we need ",res.data)
            setJeuTypeOptions(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        });
    }

    useEffect(() => {
        if (ajouteJeu) {
            getJeux();
            setajouteJeu(false);
        }
    }, [ajouteJeu])
   
    return(
        <div className="app">
            {loading && <Loader></Loader>} {/* loader component */}
            {jeuClicked ? 
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
            : null}
            <ToastContainer />
            <Header></Header>
            <div className="jeu-content">
                <AjouteJeu data={data} setData={setData} options={JeuTypeOptions} setajouteJeu={setajouteJeu}></AjouteJeu>
                <div className='jeu-list-container'>
                    <ul className='jeu-list'>
                        {data.map((jeu,index) =>(
                            <JeuCard index={index} jeu={jeu}
                                setJeuClicked={setJeuClicked}
                                setJeuToDetail={setJeuToDetail}
                                setJeuDetailsIndex={setJeuDetailsIndex}
                            ></JeuCard>
                            )
                        )}       
                    </ul>
                </div>
            </div>
        </div>
        )
}

export default Jeux;
  