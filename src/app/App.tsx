import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./pages/Home/Home";
import Scores from "./pages/Scores/Scores";
import Lyrics from "./pages/Lyrics/Lyrics";
import Player from "./pages/Player/Player";
import Layout from "./layout/Layout";
import Footer from "./Footer/Footer";
import { PlayListProvider } from "./Context";
import Detail from "./pages/Detail/Detail";

function App() {
  return (
    <PlayListProvider>
      <Router>
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/scores" element={<Scores />} />
            <Route path="/scores/:id" element={<Detail/>} />
            <Route path="/lyrics" element={<Lyrics />} />
            <Route path="/player" element={<Player />} />
          </Routes>
        </Layout>
        <Footer />
      </Router>
    </PlayListProvider>
  );
}
export default App;
