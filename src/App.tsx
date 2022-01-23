import React, { useState } from "react";
import "./App.css";
import { Container, ThemeProvider } from "@material-ui/core";
import theme from "./configuration/Theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/Header/NavBar";
import HomePage from "./components/pages/Home/HomePage";
import ExplorePage from "./components/pages/Explore/ExplorePage";
import api from "./configuration/api/api";
import Browse from "./components/pages/Browse/Browse";

interface Ibook {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: boolean;
  time: string;
  isFinished: boolean;
}

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Router>
          <Container>
            <NavBar />
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/library' element={<HomePage />} />
              <Route path='/explore/:category' element={<ExplorePage />} />
              <Route path='/browse/:id' element={<Browse />} />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
