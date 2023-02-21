import '../styles/JeuDetails.css'
import React, { useEffect, useRef, useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import ValidateUpdate from './ValidateUpdate';




function JeuDetails({jeu,index,setJeuClicked, options, data, setData, setJeuToDetail}) {

    const detailsRef = useRef(null);
    const inputNameRef = useRef(null);
    const [jeuName, setJeuName] = useState(jeu.name);
    const [jeuType, setJeuType] = useState(jeu.type);
    const [updateValidated, setUpdateValidated] = useState(false);
    const [operation, setOperation] = useState('');
    const [contentChanged, setcontentChanged] = useState(false);

  
      
    useEffect(() => {
        function handleClickOutside(event) {
            if (detailsRef.current && !detailsRef.current.contains(event.target)) {
                setJeuClicked(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    });

    function tryUpdate() {
        if (contentChanged) 
        {
          setOperation('update');
          setUpdateValidated(true);
        }
        else {
          inputNameRef.current.focus();
        }
      }
    
      function tryDelete() {
        setOperation('delete');
        setUpdateValidated(true);
      }
      

    return(
        <div className="jeu-li-details-info" ref={detailsRef}>
            {
                updateValidated ? 
                    <div className="zone-update-Validator">
                        <ValidateUpdate type="jeux" operation={operation}
                            info={jeu} 
                            data={data} 
                            setData={setData} 
                            setInfoToDetail={setJeuToDetail} 
                            index={index}
                            jeuName={jeuName}
                            jeuType={jeuType}
                            setJeuName={setJeuName}
                            setJeuType={setJeuType}
                            setUpdateValidated={setUpdateValidated}
                            setJeuClicked={setJeuClicked}
                        />
                    </div>
                : null
            }
            <InputGroup>
                <Form.Control
                    placeholder={jeuName}
                    value={jeuName}
                    onChange={(e) => 
                        {   
                            setcontentChanged(true);
                            setJeuName(e.target.value);
                        }
                }
                ref={inputNameRef}
                className="zone-name-input"
                />
                <Form.Select 
                    placeholder={jeuType}
                    value={jeuType}        
                    onChange={(e) => 
                        {
                            setcontentChanged(true);
                            setJeuType(e.target.value);
                        }
                    }>
                    {
                        options.map((option) =>(
                            <option key={option._id}>{option.name}</option>
                            )   
                        )
                    }
                </Form.Select>
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
    )
}

export default JeuDetails;