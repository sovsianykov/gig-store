import React from "react";
import Navbar from "./Navbar/Navbar";
import Layout from "./layout/Layout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import Scores from "./pages/Scores/Scores";
import Detail from "./pages/Detail/Detail";
import Lyrics from "./pages/Lyrics/Lyrics";
import Player from "./pages/Player/Player";
import Footer from "./Footer/Footer";
import Playlist from "./pages/Playlist/Playlist";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scores" element={<Scores />} />
          <Route path="/scores/:id" element={<Detail />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/lyrics" element={<Lyrics />} />
          <Route path="/player" element={<Player />} />
        </Routes>
      </Layout>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
