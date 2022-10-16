import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddDestination from './components/AddDestination';
import DestinationDtls from './components/DestinationDtls';
import Dashboard from './components/Dashboard';
import Community from './components/Community';
import EditDestination from './components/EditDestination';

function App() {

  const [destinationList, setDestinationList] = useState([])

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            
            {/* Current default page until login front end is complete */}
            <Route path="/" element={<Dashboard destinationList = {destinationList} setDestinationList = {setDestinationList} />} />
            
            <Route path="/community" element={<Community destinationList = {destinationList} setDestinationList = {setDestinationList} />} />
            {/* Add a new destination - Create */}
            <Route path = "/destinations/new" element = {<AddDestination />} />
            
            {/* Get one destination - Read */}
            <Route path = "/destinations/:id" element = {<DestinationDtls />} />
            
            {/* Update one destination - Update */}
            <Route path = "/destinations/edit/:id" element = {<EditDestination />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;