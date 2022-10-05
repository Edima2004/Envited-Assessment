import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import pages
import Home from "./Components/Home";
import CreateEvent from "./Components/CreateEvent";
import Events from "./Components/Events";

const App = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route index path="/" element={<Home/>} ></Route>
        <Route index path="/create" element={<CreateEvent/>} ></Route>
        <Route index path="/event" element={<Events/>} ></Route>
      </Routes>
    </Router>
    </>
  );
};

export default App;
