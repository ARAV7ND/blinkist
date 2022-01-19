import React, { useState } from "react";
import "./App.css";
import { Container, ThemeProvider } from "@material-ui/core";
import theme from "./components/configuration/Theme/theme";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/organisms/Header/NavBar";
import HomePage from "./components/pages/HomePage";
import ExplorePage from "./components/pages/ExplorePage";
import api from "./components/configuration/api/api";
import Browse from "./components/organisms/Browse/Browse";

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

  const handleCard = (book: Ibook) => {
    setBook(book);
  };

  const handleSearch = (input: string) => {
    if (input != null) {
      const result = booksByCategory.filter((book: Ibook) => {
        return (
          book.title.toLowerCase().indexOf(input.toLowerCase()) !== -1 ||
          book.author.toLowerCase().indexOf(input.toLowerCase()) !== -1
        );
      });
      setBooksByCategory(result);
    } else {
      setBooksByCategory(booksByCategory);
    }
  };

  return (
    <div className='App'>
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
                    handleSearch={handleSearch}
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
