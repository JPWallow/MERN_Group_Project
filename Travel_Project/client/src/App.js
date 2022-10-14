import './App.css';
import React, {useState} from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import AddDestination from './components/AddDestination';
import DestinationDtls from './components/DestinationDtls';

function App() {


  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        {/* Add a new destination - Create */}
        <Route path = "/destinations/new" element = {<AddDestination />} />
        
        {/* Get one destination - Read */}
        <Route path = "/destinations/:id" element = {<DestinationDtls />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
