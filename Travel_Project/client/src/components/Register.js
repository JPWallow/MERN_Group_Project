import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

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
    } catch (err) {
      setErr(err.response.data.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.register}>
            <h1>Register</h1>

            <div>
              <div className={styles.input}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <button className={styles.button} type="submit">
              Create Account
            </button>
            <div className={styles.footer}>
              <p>Already have an account? </p>
              <Link className={styles.link} to="/">
                {" "}
                Login Here!{" "}
              </Link>
            </div>

            {err && <h3 style={{ color: "red" }}>{err}</h3>}
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
