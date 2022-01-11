import api from "../../configuration/api/BaseUrl";
import React, { useState, useEffect } from "react";
import BookGrid from "../Grid/BookGrid/BookGrid";
import { Box } from "@material-ui/core";
interface Ibook {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: boolean;
  time: string;
}
interface CurrentlyReadingBooksProps {
  handleCard?: (tempBook: Ibook) => void;
}

export default function CurrentlyReadingBooks({
  handleCard,
}: CurrentlyReadingBooksProps) {
  const [books, setBooks] = useState([]);
  const retriveBooks = async () => {
    const response = await api.get("/books");
    return response.data;
  };

  useEffect(() => {
    const getBooks = async () => {
      let isMounted = true;
      const allBooks = await retriveBooks();
      if (isMounted) {
        if (allBooks) {
          setBooks(allBooks);
        }
      }
      return () => {
        isMounted = false;
      };
    };
    getBooks();
  });

  const handleAddToLibrary = async (book: Ibook) => {
    // console.log(book);
    handleRemove(book);
    const response = await api.post("/finished", book);
    const allBooks = await retriveBooks();
    if (allBooks) {
      setBooks(allBooks);
    }
  };

  const handleRemove = async (book: Ibook) => {
    await api.delete(`/books/${book.id}`);
    const newBookList = books.filter((tempBook: Ibook) => {
      return book.id !== tempBook.id;
    });
    setBooks(newBookList);
    console.log("length : ", newBookList.length);
  };

  const handleClick = (book: Ibook) => {
    handleAddToLibrary(book);
  };

  // const handleCard = (book?: Ibook) => {
  //   console.log("handle", book);
  // };
  return (
    <Box>
      {books && (
        <BookGrid
          bookList={books}
          handleClick={handleClick}
          handleCard={handleCard && handleCard}
          visible='none'
        />
      )}
    </Box>
  );
}
