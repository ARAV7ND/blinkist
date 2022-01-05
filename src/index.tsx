import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/Header/NavBar";
import StatusTab from "./components/organisms/StatusTab/StatusTab";
import HomePage from "./components/pages/MyLibrary";
import ExplorePage from "./components/pages/Explore";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/library' element={<HomePage />} />
        <Route path='/explore' element={<ExplorePage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
