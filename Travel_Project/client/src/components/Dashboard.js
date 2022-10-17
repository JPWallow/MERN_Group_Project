
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import styles from "./Dashboard.module.css";

const Dashboard = (props) => {
  const { removeFromDom, destinationList, setDestinationList } = props;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/travel")
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setDestinationList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteDestination = (destinationId) => {
    axios
      .delete(`http://localhost:8000/api/travel/${destinationId}`)
      .then((res) => {
        const newDestinationList = destinationList.filter(
          (oneDestination) => oneDestination._id !== destinationId
        );
        setDestinationList(newDestinationList);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <ul>
              {/* Will update to show user name once login is working */}
              {/* Will update logout link once Login/Reg is funtional */}
              <li>
                <Link className={styles.link} to="/destinations/new">
                  Add Your Destination
                </Link>{" "}
                |
              </li>
              <li>
                <Link className={styles.link} to="/community">
                  Community
                </Link>{" "}
                |
              </li>
              <li>
                {" "}
                <Link className={styles.link} to="/">
                  Logout
                </Link>
              </li>
            </ul>
          <h1>Welcome, User!</h1>
          </div>
        </div>
        <div>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <th >Destination</th>
              <th >Departed</th>
              <th >Returned</th>
              <th >Actions</th>
            </thead>
            <tbody >
              {destinationList.map((destination, index) => (
                <tr key={index} className={styles.tr}>
                  <td >
                    {destination.city}, {destination.country}
                  </td>
                  <td >{destination.departed}</td>
                  <td >{destination.returned}</td>
                  {/* Will update with correct links */}

                  <td >
                    <Link className={styles.Link} to={`/destinations/${destination._id}`}>Details</Link>
                    <Link className={styles.Link} to={`/destinations/edit/${destination._id}`}>
                      Edit
                    </Link>
                    <button className={styles.button}
                      onClick={(e) => {
                        deleteDestination(destination._id);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
