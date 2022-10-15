import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css';

const AddDestination = (props) => {

    const {destinationList, setDestinationList} = props;

    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [departed, setDeparted] = useState("");
    const [returned, setReturned] = useState("");
    const [boxArt, setBoxArt] = useState("");
    const [comments, setComments] = useState("");

    const navigate = useNavigate();
    
    const [errors, setErrors] = useState([]);

    const API_Key = "eb210e94bef01a65e8bdf3787786c3b6"

    const submitHandler=(e) =>{
        e.preventDefault();
        // placing the axios in the submitHandler event
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=imperial`)
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            setCity(res.data); 
        })
        .catch((err)=>console.log(err));

        axios.post("http://localhost:8000/api/travel",{
            city: city,
            country: country,
            departed: departed,
            returned: returned,
            boxArt: boxArt,
            comments: comments,

        })
        .then((res)=>{
            console.log(res);
            console.log(res.data);
            // update navigate once login is functioning
            navigate("/");
            setCity("");
            setCountry("");
            setDeparted("");
            setReturned("");
            setBoxArt("");
            setComments("");
            setDestinationList([...destinationList, res.data]);
            
        })
        .catch(err => {
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
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

    }
    return (
        <div>
            <div>
                 {/* Will update logout & dashboard link once Login/Reg is funtional */}
                <Link to="/community">Community</Link> | 
                <Link to="/">Dashboard</Link> | 
                <Link to="/destinations/new">Add Your Destination</Link> | 
                <Link to="/">Logout</Link>
            </div>
            <h1>Add Your Destination</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <div>
                            {errors.map((err, index) => <p style={{color:'red'}} key={index}>{err}</p>)}
                        </div>    
                        <label>City:</label>
                        <input onChange={(e)=>{
                            console.log(e)
                            console.log(e.target)
                            console.log(e.target.value)
                            setCity(e.target.value);// this line is setting the state to so onChange the setter is setting the city to the value 
                        }} type="text" />
                        <br />
                        {/* Need to hard code countries for the dropdown input standard text input for the meantime */}
                        <label>Destination Country:</label>
                        <input onChange={(e)=>{
                            console.log(e)
                            console.log(e.target)
                            console.log(e.target.value)
                            setCountry(e.target.value);
                        }} type="text" />
                        <br />
                        <label>Departed:</label>
                        <input onChange={(e)=>{
                            console.log(e)
                            console.log(e.target)
                            console.log(e.target.value)
                            setDeparted(e.target.value);
                        }} type="date" />
                        <br />
                        <label>Returned:</label>
                        <input onChange={(e)=>{
                            console.log(e)
                            console.log(e.target)
                            console.log(e.target.value)
                            setReturned(e.target.value);
                        }} type="date" />
                        <br />
                        <label>Upload a picture:</label>
                        <input onChange={(e)=>{
                            console.log(e)
                            console.log(e.target)
                            console.log(e.target.value)
                            setBoxArt(e.target.value);
                        }} type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" />
                        <br />
                        <label>Comments:</label>
                        <input onChange={(e)=>{
                            console.log(e)
                            console.log(e.target)
                            console.log(e.target.value)
                            setReturned(e.target.value);
                        }} type="textarea" />
                        <br />
                        <button>Submit</button>
                        <p>City: {city.name}</p>
                        {city.sys ? <p>Country: {city.sys.country}</p> : null }
                        {city.main ? <p>Temperature: {city.main.temp}°F</p> : null} {/* since we're trying to access a child element which temp is a child element of main, need to check if city.main is available and if so then continue to read the child elements */}
                        {city.main ? <p>Temperature feels like: {city.main.feels_like}°F</p> : null}
                        {city.weather ? <p>Weather: {city.weather[0].main}</p> : null}
                    </div>
                </form>
            </div>
        </div>
    )
} 

export default AddDestination