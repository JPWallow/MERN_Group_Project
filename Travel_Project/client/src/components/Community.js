import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import styles from "./Community.module.css";
// import dateFormat from 'dateformat';

const Community = (props) => {

    const [ destinationList, setDestinationList ] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/travel')
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setDestinationList(res.data)
            })
            .catch((err) => {
                console.log(err);
            });

    }, [])

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <div className={styles.nav}>
                    <div className={styles.header}>
                        <ul>
                            {/* Will update logout link once Login/Reg is funtional */}
                            <li>
                                <Link className={styles.link} to="/dashboard">
                                    Dashboard
                                </Link>{" "}
                                |
                            </li>
                            <li>
                                <Link className={styles.link} to="/destinations/new">
                                    Add Your Destination
                                </Link>{" "}
                                |
                            </li>
                            <li>
                                <Link className={styles.link} to="/">
                                    Logout
                                </Link>
                            </li>
                        </ul>
                        <br/>
                        <h3>Community Page</h3>
                    </div>
                </div>
            </div>


            <div>
                <table className={styles.table}>
                    <thead>
                        <th>Destination</th>
                        <th>Departed</th>
                        <th>Returned</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {destinationList.map((destination, index) => (
                            <tr key={index}>
                                <td>
                                    {destination.city}, {destination.country}
                                </td>
                                <td>{dateFormat(destination.departed, "dddd, mmmm dS, yyyy")}</td>
                                <td>{dateFormat(destination.returned, "dddd, mmmm dS, yyyy")}</td>
                                <td>
                                
                                    <Link className={styles.Link} to={`/destinations/${destination._id}`}>Details</Link>
                                    <br />
                                    {
                                        destination.createdByUser ?
                                        <span>Created By: {destination.createdByUser.firstName}</span>
                                        : null
                                    }

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Community;