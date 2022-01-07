import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import AddIcon from "@mui/icons-material/Add";
import "./App.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "./components/configuration/Theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/Header/NavBar";
import HomePage from "./components/pages/MyLibrary";
import ExplorePage from "./components/pages/Explore";
import CategoryPage from "./components/pages/CategoryPage";
function App() {
  return (
    <div className='App' style={{ margin: 10 }}>
      <ThemeProvider theme={theme}>
        <Router>
          <NavBar />

          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/library' element={<HomePage />} />
            {/* <Route path='/explore' element={<ExplorePage />} /> */}
            <Route path='/bookRepository/:category' element={<ExplorePage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
