import React from 'react';

import { Router, Route, Routes } from "react-router-dom";
import { HashRouter } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Search from "./Search";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
      <Footer />
    </HashRouter>
  )
}

export default App;