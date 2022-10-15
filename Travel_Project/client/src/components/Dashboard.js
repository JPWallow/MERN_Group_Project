import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';
import Travel from '../../../server/models/travel.model';

const Dashboard = (props) => {

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
                {/* Will update to show user name once login is working */}
                <p>Welcome, User!</p>
                <Link to="">Community</Link>
                <Link to="">Add Your Destination</Link>
                <Link to="">Logout</Link>
            </div>
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
                                <td><Link to={''}>Details</Link> <Link to={''}>Edit</Link> <Link to={''}>Delete</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Dashboard;