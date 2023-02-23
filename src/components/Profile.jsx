import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const Profile = () => {
    const currentUser = AuthService.getCurrentUser();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(currentUser);
    }, [currentUser]);


    const handleLogout = (e) => {
        e.preventDefault();
        AuthService.logout();
        navigate("/login");
        window.location.reload();
        
    }

    return (
        <div className="container" style={{color: "black"}}>
            {
                currentUser === null ? (
                <div>
                    Non connecté
                </div> )
                : (
                    <div>
                        <header className="jumbotron">
                            <h3>
                            <strong>{currentUser.firstname}</strong> Profile
                            </h3>
                        </header>
                        <p>
                            <strong>Id:</strong> {currentUser._id}
                        </p>
                        <p>
                            <strong>Email:</strong> {currentUser.email}
                        </p>
                        <strong>Authority:</strong> {currentUser.role}
                        <p></p>
                    
                        <button onClick={handleLogout}>Déconnexion</button>
                    </div>

                )
            }
        
        </div>
    );
};

export default Profile;