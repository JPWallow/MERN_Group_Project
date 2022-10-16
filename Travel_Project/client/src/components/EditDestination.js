import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom";
import styles from "./AddDestination.module.css";

const EditDestination = () => {
    return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.header}>
                    <ul>
                    {/* Will update logout & dashboard link once Login/Reg is funtional */}
                        <li><Link className={styles.link} to="/community">Community</Link>  </li>
                        <li><Link className={styles.link} to="/">Dashboard</Link>{" "}</li>
                    
                        <li><Link className={styles.link} to="/destinations/new">Add Your Destination</Link> </li>
                        
                        <li><Link className={styles.link} to="/">Logout</Link></li>
                    </ul>
                </div>
                <h1>Destination Details</h1>
            </div>
        </div>
    </div>
    )
}

export default EditDestination