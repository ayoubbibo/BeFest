import React, { useState } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import './../styles/ZoneNameOp.css';
import ValidateUpdate from './ValidateUpdate';

const ZoneNameOp = ({ zone, setZoneToDetail, setZoneClicked, index, setData, data}) => {
  const [zoneName, setZoneName] = useState(zone.name);
  const [updateValidated, setUpdateValidated] = useState(false);
  const [contentChanged, setcontentChanged] = useState(false);
  const [operation, setOperation] = useState('');
  const inputRef = React.useRef(null);



  function tryUpdate() {
    if (contentChanged) 
    {
      if (zoneName !== zone.name)
      {
        setOperation('update');
        setUpdateValidated(true);
      }
      else
      {
        
      }
    }
    else {
      inputRef.current.focus();
    }
  }

  function tryDelete() {
    setOperation('delete');
    setUpdateValidated(true);
  }
  

  return (
    <div className="zone-name-op">
      {
        updateValidated ? 
            <div className="zone-update-Validator">
                <ValidateUpdate type="zones" operation={operation}
                    info={zone} 
                    data={data} 
                    setData={setData} 
                    setInfoToDetail={setZoneToDetail} 
                    index={index}
                    zoneName={zoneName}
                    setUpdateValidated={setUpdateValidated}
                    setZoneName={setZoneName}
                    setZoneClicked={setZoneClicked}
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
              if (e.target.value !== zoneName)
              {
                setcontentChanged(true);
                setZoneName(e.target.value);
              } else {
                setcontentChanged(false);
              }
            }  
          }
          onBlur={() => 
          { 
            if (zoneName !== zone.name)
            {
              setUpdateValidated(true);
              setOperation('update');
            }
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