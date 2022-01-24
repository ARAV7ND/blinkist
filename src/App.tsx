import React from "react";
import "./App.css";
import { Container, ThemeProvider } from "@material-ui/core";
import theme from "./configuration/Theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/Header/NavBar";
import HomePage from "./components/pages/Home/HomePage";
import ExplorePage from "./components/pages/Explore/ExplorePage";
import Browse from "./components/pages/Browse/Browse";

function App() {
  return (
    <div className='App' data-testid='app'>
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
