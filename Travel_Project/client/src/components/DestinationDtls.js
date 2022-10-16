import React, {useState , useEffect} from 'react'
import axios from 'axios'
import { useParams, Link } from "react-router-dom";

import styles from "./AddDestination.module.css";

const DestinationDtls = (props) => {

// const API_Key = "eb210e94bef01a65e8bdf3787786c3b6";

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

    // axios
    //     .get(
    //         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=imperial`
    //     )
    //     .then((res) => {
    //         console.log(res);
    //         console.log(res.data);
    //         setCity(res.data);
    //     })
    //     .catch((err) => console.log(err));
        // }
    //! Need to get the axios post working
    // const submitHandler=(e) =>{
    //     e.preventDefault();
    //     // placing the axios in the submitHandler event
    //     axios.post(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=imperial`)
    //     .then((res)=>{
    //         console.log(res);
    //         console.log(res.data);
    //         setCity(res.data);
    //         setCountry(res.data);
    //     })
    //     .catch((err)=>console.log(err))
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
                <h1>{oneDestination.city}, {oneDestination.country}</h1>
                <div>
                    {/* Working on integrating the weather API
                    <p>City: {city.name}</p>
                    {city.sys ? <p>Country: {city.sys.country}</p> : null}
                    {city.main ? <p>Temperature: {city.main.temp}°F</p> : null}{" "} */}
                    {/* since we're trying to access a child element which temp is a child element of main, need to check if city.main is available and if so then continue to read the child elements */}
                    {/* {city.main ? (
                        <p>Temperature feels like: {city.main.feels_like}°F</p>
                    ) : null}
                    {city.weather ? <p>Weather: {city.weather[0].main}</p> : null} */}
                </div>
                <div>
                    <p>Departed: {oneDestination.departed}</p>
                    <p>Returned: {oneDestination.returned}</p>
                </div>    
                <div>
                    <image></image>
                    <p>Comments: {oneDestination.comments}</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default DestinationDtls;