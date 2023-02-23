import './../styles/ValidateUpdate.css';
import Axios from 'axios';
import {toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
function ValidateUpdate({type, operation, info, data, setData, setInfoToDetail,index,
  jeuName, setJeuName, jeuType, setJeuType,setJeuClicked, 
  zoneName,setUpdateValidated,setZoneName, setZoneClicked
}) 
{
  function apply() {

    console.log('apply');
    console.log(index);
    if (type === 'zones') {
      if (operation === 'update')
      {
        const reqObj = { ...info, name: zoneName };
        setInfoToDetail(reqObj);
        
        setData(data.map((info, i) => (i === index ? reqObj : info)));


        // send a request to the server to update the zone name
        Axios.put(`${process.env.REACT_APP_API_URL}/zones/${info._id}`, 
          reqObj
        )
        .then(res => 
          {
            console.log(res.data);
            toast.success('The Zone Is Updated Succesfully!', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setUpdateValidated(false);
          }  
        )
        .catch(err => console.log(err));
      }
      else if (operation === 'delete')
      {
        
        setZoneClicked(false);
        Axios.delete(`${process.env.REACT_APP_API_URL}/zones/${info._id}`)
        .then(res => {
          console.log(res.data);
          toast.success('The Zone Is Deleted Succesfully!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setData(data.filter((info, i) => i !== index));
        })
        .catch(err => console.log(err));    
      }
    }
    else if (type === 'jeux') {
      if (operation === 'update')
      {
        const reqObj = { ...info, name: jeuName, type: jeuType };
        setInfoToDetail(reqObj);
        setData(data.map((info, i) => (i === index ? reqObj : info)));

        // send a request to the server to update the zone name
        Axios.put(`${process.env.REACT_APP_API_URL}/jeux/${info._id}`, 
          reqObj
        )
        .then(res => 
          {
            console.log(res.data);
            toast.success('The Game Is Updated Succesfully!', {
              position: "top-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            setUpdateValidated(false);
          }  
        )
        .catch(err => console.log(err));
      }
      else if (operation === 'delete')
      {
        setJeuClicked(false);
        Axios.delete(`${process.env.REACT_APP_API_URL}/jeux/${info._id}`)
        .then(res => {
          console.log(res.data);
          toast.success('The Game Is Deleted Succesfully!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setData(data.filter((info, i) => i !== index));
        })
        .catch(err => console.log(err));    
      }
    }
  }

  function cancel() {
    if (type === 'zones') {
      setZoneName(info.name);
      setUpdateValidated(false);
    }
    else if (type === 'jeux') {
      setJeuName(info.name);
      setJeuType(info.type);
      setUpdateValidated(false);
    }
  }
  
  // reformule en utilisant bootstrap
  return (
    <div className="validate-update">
      <div className="validate-update-content">
        <div className="validate-update-title">
          <h5>
            {
              type === 'zones' && operation === 'update' ? `Voulez-vous vraiment modifier le nom de la zone ${info.name} en ${zoneName} ?` :
              type === 'zones' && operation === 'delete' ? `Voulez-vous vraiment supprimer la zone ${info.name} ?` :
              type === 'jeux' && operation === 'update' ? `Voulez-vous vraiment modifier le nom du jeu ${info.name} en ${zoneName} ?` :
              type === 'jeux' && operation === 'delete' ? `Voulez-vous vraiment supprimer le jeu ${info.name} ?` :
              null
            }
          </h5>
        </div>
        <div className="validate-update-buttons">
          <Button variant="outline-success" className="validate-update-yes" onClick={() => apply()}>Oui</Button>
          <Button variant="outline-danger" className="validate-update-no" onClick={() => 
             cancel()
            }>Non</Button>
        </div>
      </div>
    </div>
  );
}

export default ValidateUpdate;