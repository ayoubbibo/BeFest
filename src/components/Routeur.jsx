import Zones from './Zones';
import Benevole from './Benevole';
import Jeux from './Jeux';
import {Route, Routes, useLocation} from 'react-router-dom';
import NoExistingPage from './NoExistingPage';
import Login from './Login';
import Register from './Register';

/**
 *  this function It enables the navigation among views of various components in a React 
 * Application, allows changing the browser URL, and keeps the UI in sync with the URL
 * it creates only tree routes the first one is for the home page of posts and the second is for
 * the details of the post and an error if the user trie a url that not exist for our applicaiton
 * @returns A router
 */
function Routeur()
{
    const location = useLocation();
    return(
        <Routes location={location} key={location.pathname}> 
            <Route path="/Zones" exact element={<Zones />}/>
            <Route path="/Benevole" element={<Benevole />}/>
            <Route path="/Jeux" element={<Jeux />}/>
            <Route path="/" exact element={<Zones />}/>
            <Route path="*" element={<NoExistingPage />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
        </Routes>
    );
}

export default Routeur;