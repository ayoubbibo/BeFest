import './../styles/ValidateUpdate.css';
import Axios from 'axios';
import {toast } from 'react-toastify';

function ValidateUpdate({type, operation, zone, data, setData, setZoneToDetail, index, zoneName,setUpdateValidated}) {

  function apply() {
    if (type === 'zones' && operation === 'update') {
      const reqObj = { ...zone, name: zoneName };
      setZoneToDetail(reqObj);
      setData(data.map((zone, i) => (i === index ? reqObj : zone)));
      // send a request to the server to update the zone name
      Axios.put(`${process.env.REACT_APP_API_URL}/zones/${zone._id}`, 
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
  }


  return (
    <div className="validate-update">
      <div className="validate-update-container">
        <div className="validate-update-content">
          <div className="validate-update-header">
            <h3>Are You Sure You Want To Delete This Zone?</h3>
          </div>
          <div className="validate-update-buttons">
            <button className="validate-update-button" onClick={() => apply()}>Yes</button>
            <button className="validate-update-button" onClick={() => setUpdateValidated(false)}>No</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValidateUpdate;