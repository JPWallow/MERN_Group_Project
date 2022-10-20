import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import io from 'socket.io-client';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const [ socket, setSocket ] = useState( () => io(":8000") );
  const handleSubmit = (e) => {
    e.preventDefault();
    setErr("");
    axios
      .post(
        "http://localhost:8000/api/login",
        {
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => console.log(response));
    navigate("/dashboard").catch((err) => console.log(err));
  };
  // need this for logout in navbar
  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/logout");
    } catch (error) {
      console.log(error.response);
    }

    // axios
    // .get("http://localhost:8000/api/logout")
    // .then((response) => console.log(response))
    // .catch((err) => console.log(err));
  };

  return (
    <div className={styles.container}>
      <div>
        <h2>Wanderlust Weblog </h2>
      </div>
      <div className={styles.main}>
        <div className={styles.login}>
          <form onSubmit={handleSubmit}>
            <h3>Login</h3>
            <Link className={styles.link} to="/dashboard">
              {" "}
              Dashboard{" "}
            </Link>

            <div>
              <br />
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <br />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button className={styles.button} type="submit">
              Login
            </button>
            <div className={styles.footer}>
              <p>Don't have an account? </p>
              <Link className={styles.link} to="/register">
                {" "}
                Register Here!{" "}
              </Link>
            </div>

            {err && <h3 style={{ color: "red" }}>{err}</h3>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
