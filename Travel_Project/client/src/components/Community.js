import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
import styles from "./Community.module.css";
import dateFormat from 'dateformat';
import io from 'socket.io-client';

const Community = (props) => {

    const [ destinationList, setDestinationList ] = useState([]);
    const navigate = useNavigate();
    const [ socket, setSocket ] = useState( () => io(":8000") );

    useEffect(() => {
        console.log("inside of useEffect for sockets");
        
        socket.on("connect", () => {
            console.log("We are connected with th server on: " + socket.id );
        });
        
        socket.on("destination_added", (data) => {
            console.log(data);
            console.log("Current destinationList state: ");
            console.log(destinationList);
        

            setDestinationList( (currentDestinationListValue) => {
                console.log("Inside setDestinationList: " + currentDestinationListValue);
                return [ data, ...currentDestinationListValue ];
            });
        });


        socket.on("destination_deleted", (data) => {
            setDestinationList((currentListOfDestinations) => {
                let filteredDestinations = currentListOfDestinations.filter((oneDestination) => {
                    return oneDestination._id !== data;
                })

                return filteredDestinations;
            })
        });

        return () => socket.disconnect();

    }, [])

    useEffect(() => {
        axios.get('http://localhost:8000/api/travel')
            .then((res) => {
                console.log(res.data);
                setDestinationList(res.data)
            })
            .catch((err) => {
                console.log(err);
            });

    }, [])

    return (
        <div>
            <div>
                {/* Will update logout link once Login/Reg is funtional */}
                <Link to="/dashboard">Dashboard</Link> |
                <Link to="/destinations/new">Add Your Destination</Link> |
                <Link to="/">Logout</Link>
            </div>
            <h1>Community Page</h1>
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
                                <td>{dateFormat(destination.departed, "dddd, mmmm dS, yyyy")}</td>
                                <td>{dateFormat(destination.returned, "dddd, mmmm dS, yyyy")}</td>
                                <td>
                                    <Link to={`/destinations/${destination._id}`}>Details</Link>
                                    <br />
                                    {
                                        destination.createdByUser ?
                                        <span>Created By: {destination.createdByUser.email}</span>
                                        : null
                                    }
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Community;