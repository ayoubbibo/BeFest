import React, { useState } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import './../styles/ZoneNameOp.css';
import Axios from 'axios';
import {toast } from 'react-toastify';
import ValidateUpdate from './ValidateUpdate';

const ZoneNameOp = ({ zone, setZoneToDetail, setZoneClicked, index, setData, data}) => {
  const [zoneName, setZoneName] = useState(
    zone.name
  );

  const [updateValidated, setUpdateValidated] = useState(
    false
  );

  const [contentChanged, setcontentChanged] = useState(
    false
  );

  const inputRef = React.useRef(null);

  function tryUpdate() {
    if (contentChanged) {
      setUpdateValidated(true);
    }
    else {
      inputRef.current.focus();
    }
  }

  function tryDelete() {
    setZoneClicked(false);
    Axios.delete(`${process.env.REACT_APP_API_URL}/zones/${zone._id}`)
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
      setData(data.filter((zone, i) => i !== index));
    })
    .catch(err => console.log(err));
  }
  

  return (
    <div className="zone-name-op">
      {
        updateValidated ? 
            <div className="zone-update-Validator">
                <ValidateUpdate type="zones" operation="update" 
                    zone={zone} 
                    data={data} 
                    setData={setData} 
                    setZoneToDetail={setZoneToDetail} 
                    index={index}
                    zoneName={zoneName}
                    setUpdateValidated={setUpdateValidated}
                    />
            </div>
        : null
      }
      <InputGroup>
        <Form.Control
          placeholder={zoneName}
          value={zoneName}
          onChange={(e) => 
            {
              setcontentChanged(true);
              setZoneName(e.target.value);
            }  
          }
          onBlur={() => 
          {
            contentChanged ? setUpdateValidated(true) : setUpdateValidated(false);
          }}
          ref={inputRef}
          className="zone-name-input"
        />
      </InputGroup>
      <div className="updates">
        <Button variant="outline-warning" className='update-btn' onClick={() => tryUpdate()}>
          <FontAwesomeIcon icon={faPen}/>
        </Button>
        <Button variant="outline-danger" onClick={() => tryDelete()}
        className="delete-btn">
          <FontAwesomeIcon icon={faTrashAlt}/>
        </Button>
      </div>
  </div>
  );
};

export default ZoneNameOp;