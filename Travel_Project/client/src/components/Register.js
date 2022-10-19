import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [err, setErr] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = {
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
        };
        try {
            await axios.post("http://localhost:8000/api/register", postData);
            navigate("/");
        }   catch (err) {
            setErr(err.response.data.error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <Link to="/"> Login Page </Link>
            {err && <h3 style={{ color: "red" }}>{err}</h3>}
            <div>
                First Name:{" "}
                <input type="text" onChange={(e) => setFirstName(e.target.value)} />
            </div>

            <div>
                Last Name:{" "}
                <input type="text" onChange={(e) => setLastName(e.target.value)} />
            </div>

            <div>
                Email:{" "}
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                Password:{" "}
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div>
                Confirm Password:{" "}
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>

            <button type="submit">Create Account</button>
        </form>
    )
}

export default Register;