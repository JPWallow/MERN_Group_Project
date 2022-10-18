import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setErr("");
        const postData = { email, password };
        axios
            .post("http://localhost:8000/api/login", postData, {
                withCredentials: true,
            })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));
    };
    const handleLogout = async() => {
        try {
            const response = await axios.post("http://localhost:8000/logout")
        }   catch (error) {
            console.log(error.response);

        }

        // axios
            // .get("http://localhost:8000/logout")
            // .then((response) => console.log(response))
            // .catch((err) => console.log(err));
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <Link to="/dashboard"> Dashboard </Link>
            <Link to="/register"> Register </Link>
            {err && <h3 style={{ color: "red" }}>{err}</h3>}

            <div>
                Email:{" "}
                <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
                Password:{" "}
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit">Login</button>
            <button onClick={() => handleLogout()}>LOGOUT</button>
        </form>
    );
};

export default Login;
