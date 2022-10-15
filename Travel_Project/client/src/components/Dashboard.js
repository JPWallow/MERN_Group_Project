import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom';

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
        </div>
    )
}

export default Dashboard;