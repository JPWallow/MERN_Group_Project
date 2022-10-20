import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import dateFormat from 'dateformat';
import styles from "./DestinationDtls.module.css";

const DestinationDtls = (props) => {

  // const API_Key = "eb210e94bef01a65e8bdf3787786c3b6";
  // const API_Key = "5908dbda86bf240becb1c087c429bf56";
  const API_Key = "4bc21aaebf9f7c32fef08288682c9c6d";


  const { id } = useParams();

  // const [oneDestination, setOneDestination] = useState({});
  const [oneDestination, setOneDestination] = useState({});
  const [city, setCity] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/travel/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        console.log(res.data.city);
        setOneDestination(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  
  useEffect(()=>{
    axios
      .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${oneDestination.city}&appid=${API_Key}&units=imperial`
      )
      .then((res) => {
          console.log(res);
          console.log(res.data);
          setCity(res.data);
      })
      .catch((err) => console.log(err));
  }, [oneDestination.city]);


  
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
              </li>
              <li>
                <Link className={styles.link} to="/destinations/new">
                  Add Your Destination
                </Link>{" "}
              </li>
              <li>
                <Link className={styles.link} to="/community">
                  Community
                </Link>{" "}
              </li>
              <li>
                <Link className={styles.link} to="/">
                  Logout
                </Link>
              </li>
            </ul>
            <h1>
              {oneDestination.city}, {oneDestination.country}
            </h1>
          </div>
          <div className={styles.body}>
            <div className={styles.weather}>
              <div>
                {city.sys ? <p>Country: {city.sys.country}</p> : null}
                {city.main ? <p>Temperature: {city.main.temp}°F</p> : null}{" "}
                {city.main ? (
                  <p>Temperature feels like: {city.main.feels_like}°F</p>
                ) : null}
                {city.weather ? <p>Weather: {city.weather[0].main}</p> : null}
              </div>

              <div >
                <p>Departed: {dateFormat(oneDestination.departed, "dddd, mmmm dS, yyyy")}</p>
                <p>Returned: {dateFormat(oneDestination.returned, "dddd, mmmm dS, yyyy")}</p>
              </div>
            </div>
            <div className={styles.image}>
              <img src={`${oneDestination.boxArt}`} alt={`${oneDestination.boxArt}`} />
              <p>Comments: {oneDestination.comments}</p>
              {
                oneDestination.createdbyUser ?
                  (
                    <div>
                      User's ID: { oneDestination.createdByUser._id }
                      <br />
                      User's Name: { oneDestination.createdByUser.email }
                    </div>
                  )
                  : null
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDtls;
