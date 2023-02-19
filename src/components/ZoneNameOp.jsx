import React, { useState,useEffect } from 'react';
import { InputGroup, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import './../styles/ZoneNameOp.css';
import Axios from 'axios';
import {toast } from 'react-toastify';

const ZoneNameOp = ({ zone, setZoneToDetail, setZoneClicked, index, setData, data}) => {
  const [zoneName, setZoneName] = useState(
    zone.name
  );

  const inputRef = React.useRef(null);

  useEffect(() => {
    inputRef.current.onblur = () => {
      const reqObj = { ...zone, name: zoneName };
      setZoneToDetail(reqObj);
      setData(data.map((zone, i) => (i === index ? reqObj : zone)));
      // send a request to the server to update the zone name
      Axios.put(`${process.env.REACT_APP_API_URL}/zones/${zone._id}`, 
        reqObj
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
  }, [zone, zoneName,setZoneToDetail,data,index,setData]);


  function showZoneDetails(){
    setZoneClicked(false);
  }



  return (
    <InputGroup className="zone-name">
      <Form.Control
        placeholder={zoneName}
        value={zoneName}
        onChange={(e) => setZoneName(e.target.value)}
        ref={inputRef}
      />
      <Button variant="outline-warning">
        <FontAwesomeIcon icon={faPen} />
      </Button>
      <Button variant="outline-danger" onClick={() => showZoneDetails()}>
        <FontAwesomeIcon icon={faTrashAlt}/>
      </Button>
  </InputGroup>

  );
};

export default ZoneNameOp;