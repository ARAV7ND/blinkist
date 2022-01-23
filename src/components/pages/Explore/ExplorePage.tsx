import { Box, Container, Typography } from "@mui/material";
import * as React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../../configuration/api/api";
import SearchInput from "../../Molecules/Input/SearchInput/SearchInput";
import BookGrid from "../../organisms/Grid/BookGrid/BookGrid";

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: boolean;
  time: string;
  isFinished: boolean;
}

const ExplorePage = () => {
  const category = useParams().category;
  const [booksByCategory, setBooksByCategory] = useState([]);
  const [books, setBooks] = useState([]);

  const retriveByCategory = async () => {
    let categoryResult = await api.get(`/bookRepository/?category=${category}`);
    return categoryResult.data;
  };

  useEffect(() => {
    const getBooks = async () => {
      let tempBooks = await retriveByCategory();
      setBooks(tempBooks);
    };
    getBooks();
  }, []);

  useEffect(() => {
    const getBooks = async () => {
      let tempBooks = await retriveByCategory();
      setBooks(tempBooks);
    };
    getBooks();
  });
  useEffect(() => {
    const getBooks = async () => {
      let tempBooks = await retriveByCategory();
      setBooks(tempBooks);
      setBooksByCategory(tempBooks);
    };
    getBooks();
  }, [category]);

  const handleAddTolibrary = (book: Book) => {
    book.status = true;
    const addTolibrary = async () => {
      await api.put(`/bookRepository/${book.id}`, book);
    };
    addTolibrary();
  };

  const handleSearch = (input: string) => {
    if (input.trim().length !== 0) {
      const result = booksByCategory.filter((book: Book) => {
        return (
          book.title.toLowerCase().indexOf(input.toLowerCase()) !== -1 ||
          book.author.toLowerCase().indexOf(input.toLowerCase()) !== -1
        );
      });
      setBooks(result);
    } else {
      setBooks(booksByCategory);
    }
  };
  return (
    <Container data-testid='explore-page'>
      <Box>
        <SearchInput onChange={handleSearch} />
      </Box>
      <Box>
        <Typography variant='subtitle1' fontWeight={600}>
          Trending blinks
        </Typography>
      </Box>
      <Box>
        <BookGrid bookList={books} handleClick={handleAddTolibrary} />
      </Box>
    </Container>
  );
};

export default ExplorePage;
