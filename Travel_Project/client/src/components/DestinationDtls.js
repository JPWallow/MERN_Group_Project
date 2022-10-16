import React, {useState , useEffect} from 'react'
import axios from 'axios'
import { useParams, Link } from "react-router-dom";
import styles from "./AddDestination.module.css";

const DestinationDtls = (props) => {
    
    const{id} = useParams();
    const [oneDestination, setOneDestination] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:8000/api/travel/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setOneDestination(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <div className={styles.nav}>
                <div className={styles.header}>
                    <ul>
                    {/* Will update logout link once Login/Reg is funtional */}
                        <li><Link className={styles.link} to="/community">Community</Link>  </li>
                        <li><Link className={styles.link} to="/dashboard">Dashboard</Link>{" "}</li>
                    
                        <li><Link className={styles.link} to="/destinations/new">Add Your Destination</Link> </li>
                        
                        <li><Link className={styles.link} to="/">Logout</Link></li>
                    </ul>
                </div>
                <h1>{oneDestination.city}, {oneDestination.country}</h1>
            </div>
        </div>
    </div>
    )
}

export default DestinationDtls;