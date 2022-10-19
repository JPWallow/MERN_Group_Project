import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

import styles from "./DestinationDtls.module.css";

const DestinationDtls = (props) => {

  const { id } = useParams();
  // const API_Key = "eb210e94bef01a65e8bdf3787786c3b6";
  const [oneDestination, setOneDestination] = useState({});


  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/travel/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setOneDestination(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);


  // axios
  //   .get(
  //     `https://api.openweathermap.org/data/2.5/weather?q=${oneDestination.city}&appid=${API_Key}&units=imperial`
  //   )
  //   .then((res) => {
  //     console.log(res);
  //     console.log(res.data);
  //     oneDestination.setCity(res.data);
  //   })
  //   .catch((err) => console.log(err));


  return (
    <div className={styles.mainContainer}>
      {oneDestination.map((destination,index) => (
      <div key ={index} className={styles.container}>
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
                {destination.city}, {destination.country}
              </h1>
            </div>
            <div className={styles.body}>
              <div className={styles.weather}>
                {/* <div>
                  <p>City: {oneDestination.city.name}</p>
                  {oneDestination.city.sys ? <p>Country: {oneDestination.city.sys.country}</p> : null}
                  {oneDestination.city.main ? <p>Temperature: {oneDestination.city.main.temp}°F</p> : null}{" "}
                  {oneDestination.city.main ? (
                    <p>Temperature feels like: {oneDestination.city.main.feels_like}°F</p>
                  ) : null}
                  {oneDestination.city.weather ? <p>Weather: {oneDestination.city.weather[0].main}</p> : null}
                </div> */}

                <div >
                  <p>Departed: {destination.departed}</p>
                  <p>Returned: {destination.returned}</p>
                </div>
              </div>
              <div className={styles.image}>
                <img src={``} />
                <p>Comments: {destination.comments}</p>
              </div>
          </div>
        </div>
      </div>
      ))}
    </div>
  );
};

export default DestinationDtls;
