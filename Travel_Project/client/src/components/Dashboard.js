import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {  useNavigate, Link } from 'react-router-dom';
import '../App.css';

const Dashboard = (props) => {

    const { removeFromDom, destinationList, setDestinationList } = props;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/api/travel")
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setDestinationList(res.data);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    const deleteDestination = (destinationId) => {
        axios.delete(`http://localhost:8000/api/travel/` + destinationId)
            .then (res => {
                removeFromDom(destinationId)
                console.log(res.data);
                navigate("/dashboard")
                
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div>
                {/* Will update to show user name once login is working */}
                 {/* Will update logout link once Login/Reg is funtional */}
                <Link to="/destinations/new">Add Your Destination</Link> |
                <Link to="/community">Community</Link> |
                <Link to="/">Logout</Link>
            </div>
            <h1>Welcome, User!</h1>
            <div>
                <table>
                    <thead> 
                        <th>Destination</th>
                        <th>Departed</th>
                        <th>Returned</th>
                        <th>Actions</th>
                    </thead>
                    <tbody>
                        {destinationList.map((destination, index) => ( 
                            <tr key={index}>
                                <td>{destination.city}, {destination.country}</td>
                                <td>{destination.departed}</td>
                                <td>{destination.returned}</td>
                                {/* Will update with correct links */}
                                <td>
                                    <Link to={`/destinations/${destination._id}`}>Details</Link> 
                                    <Link to={`/destinations/edit/${destination._id}`}>Edit</Link> 
                                    <button onClick={(e)=>{deleteDestination(destination._id)}}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard;