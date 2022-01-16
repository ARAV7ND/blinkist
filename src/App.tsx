import React, { useEffect, useState } from "react";
import "./App.css";
import { Container, ThemeProvider } from "@material-ui/core";
import theme from "./components/configuration/Theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/Header/NavBar";
import HomePage from "./components/pages/MyLibrary";
import ExplorePage from "./components/pages/Explore";
import api from "./components/configuration/api/BaseUrl";
import Browse from "./components/organisms/Browse/Browse";
import { CssBaseline } from "@mui/material";

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
// interface statusProps {
//   handleCard?: (tempBook: Ibook) => void;
// }

function App() {
  const [booksByCategory, setBooksByCategory] = useState([]);
  const [theBook, setBook] = useState<Ibook>();

  const handleClick = async (book: Ibook) => {
    book.status = true;
    console.log(book.status);
    await api.put(`/bookRepository/${book.id}`, book);
    await api.post("/currentlyReading", book);
    handleGetByCategory(book.category);
  };
  const handleGetByCategory = async (category: string) => {
    const categoryResult = await api.get(
      `/bookRepository/?category=${category}`
    );
    setBooksByCategory(categoryResult.data);
    console.log(categoryResult.data);
  };
  // var theBook: Ibook;

  const handleCard = (book: Ibook) => {
    // console.log("handler:", book);
    setBook(book);
  };

  return (
    <div className='App' style={{ margin: 10 }}>
      <ThemeProvider theme={theme}>
        <Router>
          <Container>
            <NavBar handleGetByCategory={handleGetByCategory} />
            <Routes>
              <Route path='/' element={<HomePage handleCard={handleCard} />} />
              <Route
                path='/library'
                element={<HomePage handleCard={handleCard} />}
              />
              <Route
                path='/bookRepository/:category'
                element={
                  <ExplorePage
                    bookList={booksByCategory}
                    handleClick={handleClick}
                    handleCard={handleCard}
                  />
                }
              />
              <Route
                path='/browse'
                element={
                  <Browse book={theBook} handleAddTolibrary={handleClick} />
                }
              />
            </Routes>
          </Container>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
