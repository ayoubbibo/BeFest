import './../styles/ValidateUpdate.css';

function ValidateUpdate() {
  return (
    <div className="validate-update">
      <div className="validate-update-container">
        <div className="validate-update-content">
          <div className="validate-update-header">
            <h3>Are You Sure You Want To Delete This Zone?</h3>
          </div>
          <div className="validate-update-buttons">
            <button className="validate-update-button">Yes</button>
            <button className="validate-update-button">No</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ValidateUpdate;