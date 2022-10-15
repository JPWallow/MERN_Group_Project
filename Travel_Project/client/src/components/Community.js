import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

const Community = (props) => {

    const { destinationList, setDestinationList } = props;
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

    return (
        <div>
            <div>
                 {/* Will update logout & dashboard link once Login/Reg is funtional */}
                <Link to="/">Dashboard</Link> |
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
                                <td>{destination.departed}</td>
                                <td>{destination.returned}</td>
                                <td><Link to={`/destinations/${destination._id}`}>Details</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}


export default Community;