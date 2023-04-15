import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Allposts from "./pages/Allposts";
import Navbar from "./components/navbar/Navbar";
import Article from "./pages/Article";
import Event from "./pages/Event";
import Education from "./pages/Education";
import Job from "./pages/Job";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Allposts />} />
          <Route path="article" element={<Article />} />
          <Route path="event" element={<Event />} />
          <Route path="education" element={<Education />} />
          <Route path="job" element={<Job />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
