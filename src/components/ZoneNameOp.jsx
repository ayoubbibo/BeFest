import React, { useState,useEffect } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import './../styles/ZoneNameOp.css';
import Axios from 'axios';
import {toast } from 'react-toastify';

const ZoneNameOp = ({ zone, setZoneClicked, setZoneToDetail, zoneClicked}) => {
  const [isEditable, setIsEditable] = useState(false);
  const [zoneName, setZoneName] = useState(zone.name);


  const inputRef = React.useRef(null);


  const handleEdit = () => {    
    setIsEditable(true);
    inputRef.current.focus();
  };

  const handlEditChange = (e) => {
    if (e.target.value !== zoneName) {
      setZoneName(e.target.value);
    }
  };

  useEffect(() => {
    inputRef.current.onblur = () => {
      setIsEditable(false);
      console.log(" bibo  " + zoneName);
      zone.name = zoneName;
      setZoneToDetail(zone);
      console.log(zone);
      // send a request to the server to update the zone name
      Axios.put(`${process.env.REACT_APP_API_URL}/zones/${zone._id}`, 
        zone
      )
      .then(res => {
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

      }
      )
      .catch(err => console.log(err));
    }
  }, [zoneName]);


  const handleDelete = () => {
    zone.name = zoneName;
    setIsEditable(false);
  };
  
  function showZoneDetails(zone){
    if(zoneClicked){
      setZoneClicked(false);
     }else{
      setZoneClicked(true);
      setZoneToDetail(zone);
    }
  }

  return (
    <InputGroup className="zone-name">
      <Form.Control
        placeholder={zoneName}
        value={zoneName}
        onChange={(e) => handlEditChange(e)} 
        onClick={() => 
          !isEditable ? showZoneDetails(zone) : null
        }
        readOnly={!isEditable}
        className={isEditable ? 'editable' : 'not-editable'}
        ref={inputRef}
      />
      <Button variant="outline-warning" onClick={handleEdit}>
        <FontAwesomeIcon icon={faPen} />
      </Button>
      <Button variant="outline-danger" onClick={handleDelete}>
        <FontAwesomeIcon icon={faTrashAlt}/>
      </Button>
  </InputGroup>
  );
};

export default ZoneNameOp;