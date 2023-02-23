
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

//To display the message if there is a required information not provided by the user
const required = (value) => {
    if (!value) {
      return (
        <div className="invalid-feedback d-block">
          This field is required!
        </div>
      );
    }
};


//To display the message if the email is not valid
const emailValid = value => {
    if (!isEmail(value)) {
      return (
        <div className="invalid-feedback d-block">
          This is not a valid email.
        </div>
      );
    }
};


function Login() {
    const form = useRef();
    const checkBtn = useRef();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");


    useEffect(() => {
        const user = AuthService.getCurrentUser();
        console.debug(user);
    }, []);


    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }


    const handleRegister = (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);
        form.current.validateAll();

        if(checkBtn.current.context._errors.length === 0){
            AuthService.login(email, password).then(
                () => {
                    navigate("/profile");
                },
                error => {
                    const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
                    setLoading(false);
                    setMessage(resMessage);
                }
            )
        }else{
            setLoading(false);
        }
    };


    return (
        <div>
            <div  style={{width: "50%", marginLeft: "auto", marginRight: "auto", color:"black"}}>
                <h1>Login</h1>
                <Form ref={form} onSubmit={handleRegister}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Input type="text" className="form-control" name="email" value={email} onChange={onChangeEmail} validations={[required, emailValid]}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <Input type="password" className="form-control" name="password" value={password} onChange={onChangePassword} validations={[required]}/>
                    </div>
                    <div>
                        <button className="btn btn-primary btn-block" disabled={loading}>
                            {loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Login</span>
                        </button>
                    </div>
                    {message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{display: "none"}} ref={checkBtn}/>
                </Form>
            </div>
        </div>
    )

}

export default Login;