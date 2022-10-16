import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddDestination from './components/AddDestination';
import DestinationDtls from './components/DestinationDtls';
import Dashboard from './components/Dashboard';
import Community from './components/Community';
import EditDestination from './components/EditDestination';
import Login from './components/Login';

function App() {

  const [destinationList, setDestinationList] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            
            {/* Current default page until login front end is complete */}
            <Route path="/" element={<Login />} />
            
            <Route path="/dashboard" element={<Dashboard destinationList = {destinationList} setDestinationList = {setDestinationList} />} />
            
            <Route path="/community" element={<Community destinationList = {destinationList} setDestinationList = {setDestinationList} />} />
            
            {/* Add a new destination - Create */}
            <Route path = "/destinations/new" element = {<AddDestination destinationList = {destinationList} setDestinationList = {setDestinationList} />} />
            
            {/* Get one destination - Read */}
            <Route path = "/destinations/:id" element = {<DestinationDtls destinationList = {destinationList} setDestinationList = {setDestinationList} />} />
            
            {/* Update one destination - Update */}
            <Route path = "/destinations/edit/:id" element = {<EditDestination destinationList = {destinationList} setDestinationList = {setDestinationList} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;