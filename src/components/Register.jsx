import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";

import AuthService from "../services/auth.service";


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
const validEmail = (value) => {
    if (!isEmail(value)) {
      return (
        <div className="invalid-feedback d-block">
          This is not a valid email.
        </div>
      );
    }
};
  
const vname = (value) => {
if (value.length < 3 || value.length > 20) {
    return (
    <div className="invalid-feedback d-block">
        The username must be between 3 and 20 characters.
    </div>
    );
}
};

const vpassword = (value) => {
if (value.length < 4 || value.length > 40) {
    return (
    <div className="invalid-feedback d-block">
        The password must be between 6 and 40 characters.
    </div>
    );
}
};


function Register(){
    const form = useRef();
    const checkBtn = useRef();

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("benevole");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");
    const roles = ["benevole", "admin"];
    const [loading, setLoading] = useState(false);


    const onChangeFirstname = (e) => {
        const firstname = e.target.value;
        setFirstname(firstname);
    }

    const onChangeLastname = (e) => {
        const lastname = e.target.value;
        setLastname(lastname);
    }

    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const onChangeRole = (e) => {
        const role = e.target.value;
        setRole(role);
    }

    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);
        setLoading(true);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            AuthService.register(firstname, lastname, email, password, role).then(
                (response) => {
                    setMessage(response.data.message);
                    setSuccessful(true);
                },
                (error) => {
                    const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();

                    setMessage(resMessage);
                    setSuccessful(false);
                }
            );
        } else {
            setLoading(false);
        }
    }


    return (
        <div style={{color: "black"}}>
            <div style={{ width: "40%", marginLeft: "auto", marginRight: "auto"}}>
                <Form onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div>
                            <div className="form-group">
                                <label htmlFor="firstname">Firstname</label>
                                <Input
                                type="text"
                                className="form-control"
                                name="firstname"
                                value={firstname}
                                onChange={onChangeFirstname}
                                validations={[required, vname]}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastname">Lastname</label>
                                <Input
                                type="text"
                                className="form-control"
                                name="lastname"
                                value={lastname}
                                onChange={onChangeLastname}
                                validations={[required, vname]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Input
                                type="text"
                                className="form-control"
                                name="email"
                                value={email}
                                onChange={onChangeEmail}
                                validations={[required, validEmail]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <Input
                                type="password"
                                className="form-control"
                                name="password"
                                value={password}
                                onChange={onChangePassword}
                                validations={[required, vpassword]}
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="role">Role</label>
                                <select
                                    className="form-select"  
                                    name="role"
                                    value={role}
                                    onChange={onChangeRole}
                                    validations={[required]}
                                >
                                    {roles.map((role) => (
                                        <option key={role} value={role}>
                                            {role}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <button className="btn btn-primary btn-block" disabled={loading}>
                                    {loading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )}
                                    <span>Register</span>
                                </button>
                            </div>
                        </div>
                    )}

                    {message && (
                        <div className="form-group">
                            <div
                                className={
                                successful ? "alert alert-success" : "alert alert-danger"
                                }
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
            </div>
        </div>
    );
    
}



export default Register;