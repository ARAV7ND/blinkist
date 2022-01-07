import axios from "axios";
import React, { useState, useEffect } from "react";
import BookGrid from "../Grid/BookGrid/BookGrid";
import api from "../../configuration/api/BaseUrl";
export default function FinishedBooks() {
  const [books, setBooks] = useState(new Array());

  const retriveBooks = async () => {
    const response = await api.get("/finished");
    return response.data;
  };

  const bookHandler = async () => {
    const response = await api.post("/finished");
    setBooks([...books, response.data]);
  };

  const handleClick = (book: object) => {
    console.log(book);

    // bookHandler(book);
  };

  useEffect(() => {
    async function getBooks() {
      const allBooks = await retriveBooks();
      if (allBooks) {
        setBooks(allBooks);
      }
    }
    getBooks();
  }, [books]);

  return (
    <div>
      {books && (
        <BookGrid bookList={books} handleClick={handleClick} visible='none' />
      )}
      {/* <h1>BOOKs</h1> */}
    </div>
  );
}
