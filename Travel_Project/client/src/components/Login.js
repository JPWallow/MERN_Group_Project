import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [err, setErr] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setErr("");
        axios
            .post("http://localhost:8000/api/login", {
                email: email,
                password: password,
            },
            {
                withCredentials: true,
            }
            )
            .then((response) => { 
                console.log(response);
                navigate ("/dashboard");
            })
            .catch(err => {
                console.log(err.response);
                setErr(err.response.data.message);
            });
        };
    // need this for logout in navbar
    const handleLogout = async() => {
        try {
            console.log('logged out')
            const response = await axios.get("http://localhost:8000/api/logout",             {
                withCredentials: true,
            })
        }   catch (error) {
            console.log(error.response);
        };

        // axios
        //     .get("http://localhost:8000/api/logout")
        //     .then((response) => console.log(response))
        //     .catch((err) => console.log(err));
    };

    return (
        <div>
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
            </form>
            <button onClick ={ handleLogout }>
                LOGOUT
            </button>
        </div>
    );
};

export default Login;
