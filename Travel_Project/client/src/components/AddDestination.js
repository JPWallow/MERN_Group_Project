import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import styles from "./AddDestination.module.css";
import countryData from '../countries.json';

const AddDestination = (props) => {
  const { destinationList, setDestinationList } = props;

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [departed, setDeparted] = useState("");
  const [returned, setReturned] = useState("");
  const [boxArt, setBoxArt] = useState("");
  const [comments, setComments] = useState("");

  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);
  
  // async function submitHandler(e) {
  //   e.preventDefault();
  //   try{
  //     let imageUrl= "";
  //     if(boxArt) {
  //       const formData = new FormData();
  //       formData.append("file", boxArt);
  //       formData.append("upload_preset", "presentName");
  //       const dataRes = await axios.post(
  //         "yourUrl",
  //         formData
  //       );
  //       imageUrl = dataRes.data.url;
  //     }
  //   }

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/travel", {
        city,
        country,
        departed,
        returned,
        boxArt,
        comments,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        navigate("/dashboard");
        setCity("");
        setCountry("");
        setDeparted("");
        setReturned("");
        setBoxArt("");
        setComments("");
        setDestinationList([...destinationList, res.data]);
      })
      .catch((err) => {
        const errorResponse = err.response.data.error.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
          errorArr.push(errorResponse[key].message);
        }
        setErrors(errorArr);
      });
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.nav}>
          <div className={styles.header}>

            <ul >
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
                <Link className={styles.link} to="/community">
                  Community
                </Link>{" "}
                |
              </li>
              <li>
                <Link className={styles.link} to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
          <h4>Add Your Destination</h4>
        </div>

        <div className={styles.body}>
          <form onSubmit={submitHandler} className={styles.form}>
            <ul>
              <li className={styles.validation}>
                {errors.map((err, index) => (
                  <p style={{ color: "red" }} key={index}>
                    {err}
                  </p>
                ))}
              </li>
              <li>
                <label>City:</label>
                <br />
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
              <li>
                <label>Destination Country:</label>
                <br />
                <select className={styles.select} name="" id="" onChange={(e) => {
                  console.log(e.target.value)
                  setCountry(e.target.value);
                }}>
                  {
                    countryData.map((getCountry, index) => (
                      <option value={getCountry.name} key={index}>{getCountry.name}</option>

                    ))
                  }

                </select>
              </li>
              <li>
                <label>Departed:</label>
                <br />
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
                <label>Returned:</label>
                <br />
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
                <label>Upload a picture:</label>
                <br />
                {/* <input type="text" 
                  value={boxArt}
                  onChange={(e) => {
                    console.log(e);
                    console.log(e.target);
                    console.log(e.target.value);
                    setBoxArt(e.target.value);
                  }}/> */}
                <input
                  type="file"
                  value={boxArt}
                  name="boxArt"
                  id="image-input"
                  accept="image/*"
                  // accept="image/jpeg, image/png, image/jpg"
                  className={styles.input}
                  onChange={(e) => {
                    console.log(e);
                    console.log(e.target);
                    console.log(e.target.value);
                    setBoxArt(e.target.value);
                    // setBoxArt(e.target.files[0]);
                  }}
                />
              </li>
              <li>
                <label>Comments:</label>
                <br />
                <textarea
                  type="textarea"
                  value={comments}
                  name="comments"
                  className={styles.inputTextarea}
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
  );
};

export default AddDestination;