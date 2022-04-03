import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home/Home";
import Scores from "./pages/Scores/Scores";
import { Lyrics } from "@mui/icons-material";
import Player from "./pages/Player/Player";
import Layout from "./layout/Layout";

function App() {
  return (
    <Router>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/lyrics" element={<Lyrics />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
