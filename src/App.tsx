import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import AddIcon from "@mui/icons-material/Add";
import "./App.css";
import { CustomButtom } from "./components/Atoms/Button/Button";
import { ThemeProvider } from "@material-ui/core";
import theme from "./Theme/theme";
import BookCard from "./components/Molecules/Card/BookCard/BookCard";
import axios from "axios";
import BookGrid from "./components/organisms/Grid/BookGrid/BookGrid";
import StatusTab from "./components/organisms/StatusTab/StatusTab";
function App() {
  const [books, setBooks] = useState(null);

  useEffect(() => {
    async function getBooks() {
      const books = await axios("http://localhost:8000/books");
      setBooks(books.data);
    }
    getBooks();
  }, [books]);

  const book = {
    id: 4,
    title: "Genesis",
    author: "Guido Tonelli",
    time: "12",
    category: "Science",
    image:
      "https://images.blinkist.com/images/books/608bcaf36cee07000722912e/1_1/470.jpg",
    status: true,
  };
  return (
    <div className='App' style={{ margin: 10 }}>
      {/* <ThemeProvider theme={theme}>
        <CustomButtom
          variant='contained'
          color='primary'
          size='large'
          label='button'
          // startIcon={<AddIcon />}
          endIcon={<AddIcon />}
        />

        <BookCard book={book} />
      </ThemeProvider> */}

      {/* <BookCard book={book} /> */}
      {/* {books && <BookGrid bookList={books} />} */}
      <ThemeProvider theme={theme}>
        <StatusTab />
      </ThemeProvider>
    </div>
  );
}

export default App;
