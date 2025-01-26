import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoveQuestion from "./components/LoveQuestion";
import YesPage from "./components/Yes";
import NoPage from "./components/No";
import MainNavigation from "./components/MainNavigation";
import Reasons from "./components/Reasons"; // Import Reasons component
import Songs from "./components/Songs"; // Import Songs component
import Photos from "./components/Photos"; // Import Photos component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoveQuestion />} />
        <Route path="/yes" element={<YesPage />} />
        <Route path="/no" element={<NoPage />} />
        <Route path="/main-navigation" element={<MainNavigation />} />
        <Route path="/reasons" element={<Reasons />} /> {/* Add the route */}
        <Route path="/songs" element={<Songs />} /> {/* Add the route */}
        <Route path="/photos" element={<Photos />} /> {/* Add the route */}
      </Routes>
    </Router>
  );
}

export default App;
