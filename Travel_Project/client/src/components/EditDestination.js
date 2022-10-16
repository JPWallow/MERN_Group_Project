import React, { useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from "react-router-dom";
import styles from "./AddDestination.module.css";

const EditDestination = (props) => {

    const{id} = useParams();

    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [departed, setDeparted] = useState("");
    const [returned, setReturned] = useState("");
    const [boxArt, setBoxArt] = useState("");
    const [comments, setComments] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/travel/${id}`)
        .then(res => {
            console.log(res);
            console.log(res.data);
            setCity(res.data.city);
            setCountry(res.data.country);
            setDeparted(res.data.departed);
            setReturned(res.data.returned);
            setBoxArt(res.data.boxArt);
            setComments(res.data.comments);
        })
        .catch(err => console.log(err))
    }, [id])
    
    const updateOne = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/travel/edit/${id}`, {
            city,
            country,  
            departed,
            returned,
            boxArt,
            comments,
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                navigate("/dashboard");
            })
            .catch(err => console.log(err))
    }


    return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.header}>
                    <ul>
                    {/* Will update logout link once Login/Reg is funtional */}

                        <li><Link className={styles.link} to="/dashboard">Dashboard</Link>{" "}</li>
                        <li><Link className={styles.link} to="/destinations/new">Add Your Destination</Link> </li>
                        <li><Link className={styles.link} to="/community">Community</Link>  </li>

                        <li><Link className={styles.link} to="/">Logout</Link></li>
                    </ul>
                </div>
                <h1>Edit Your Destination</h1>
            </div>
            <div className={styles.body}>
                <form onSubmit={updateOne} className={styles.form}>
                    <ul>

                        <li className={styles.validation}>
                            {/* {errors.map((err, index) => (
                            <p style={{ color: "red" }} key={index}>
                                {err}
                            </p>
                            ))} */}
                        </li>
                        <li>
                            <label>City:</label><br />
                            <input
                            type="text"
                            value={city}
                            name="city"
                            className={styles.input}
                            onChange={(e) => {
                                console.log(e);
                                console.log(e.target);
                                console.log(e.target.value);
                                setCity(e.target.value); // this line is setting the state to so onChange the setter is setting the city to the value
                            }}
                            />
                        </li>
                        {/* Need to hard code countries for the dropdown input, standard text input for the meantime */}
                        <li>
                            <label>Destination Country:</label><br />
                            <input
                            type="text"
                            value={country}
                            name="country"
                            className={styles.input}
                            onChange={(e) => {
                                console.log(e);
                                console.log(e.target);
                                console.log(e.target.value);
                                setCountry(e.target.value);
                            }}
                            />
                        </li>
                        <li>
                            <label>Departed:</label><br />
                            <input
                            type="date"
                            value={departed}
                            name="departed"
                            className={styles.input}
                            onChange={(e) => {
                                console.log(e);
                                console.log(e.target);
                                console.log(e.target.value);
                                setDeparted(e.target.value);
                            }}
                            />
                        </li>
                        <li>
                            <label>Returned:</label><br />
                            <input
                            type="date"
                            value={returned}
                            name="returned"
                            className={styles.input}
                            onChange={(e) => {
                                console.log(e);
                                console.log(e.target);
                                console.log(e.target.value);
                                setReturned(e.target.value);
                            }}
                            />
                        </li>
                        <li>
                            <label>Upload a picture:</label><br />
                            <input
                            type="file"
                            value={boxArt}
                            name="boxArt"
                            id="image-input"
                            accept="image/jpeg, image/png, image/jpg"
                            className={styles.input}
                            onChange={(e) => {
                                console.log(e);
                                console.log(e.target);
                                console.log(e.target.value);
                                setBoxArt(e.target.value);
                            }}
                            />
                        </li>
                        <li>
                            <label>Comments:</label><br />
                            <input
                            type="textarea"
                            value={comments}
                            name="comments"
                            className={styles.input}
                            onChange={(e) => {
                                console.log(e);
                                console.log(e.target);
                                console.log(e.target.value);
                                setComments(e.target.value);
                            }}
                            />
                        </li>
                        <li>
                            <button>Submit</button>
                        </li>
                    </ul> 
                </form>
            </div>
        </div>
    </div>
    )
}

export default EditDestination