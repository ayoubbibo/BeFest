import { useNavigate } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import '../styles/NoExistingPage.css';


/**
 * this component will rendered if the user try a to go
 * to a route that is not supported by the app router 
 */
function NoExistingPage() {
    let navigate = useNavigate();
return (
    <div className="Error">
        <Alert variant="danger">
            <Alert.Heading>Aie aie aie! You got to an route that does not exist!</Alert.Heading>
            <p>
            Change this and that and try again. or use the button to go back to home page.
            please do not use the url to navigate between routes.
            </p>
        </Alert>
        <Button variant="warning" onClick={()=> {navigate("/")}}>Go back to home</Button>    
    </div>
);

}

export default NoExistingPage;