import {React, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import LandingPage from "./LandingPage";
import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashbaord";
import Section from "./Pages/Section";
import Land from "./Pages/Land";
import PageNotFound from "./Pages/PageNotFound";
import CropList from "./Pages/CropList";
import FertilizerList from "./Pages/FertilizerList";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')


  return (
    // <div> <LandingPage /> </div>
    <>
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
          <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/section" element={<Section />} />
          <Route path="/land" element={<Land />} />
          <Route path="/pageNotFound" element={<PageNotFound />} />
          <Route path="/cropList" element={<CropList />} />
          <Route path="/fertilizer" element={<FertilizerList />} />


          {/* <Redirect to="/" /> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
