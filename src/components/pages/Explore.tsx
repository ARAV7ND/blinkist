import { Container } from "@mui/material";
import * as React from "react";
import { useState, useEffect } from "react";
import SearchInput from "../Molecules/Input/SearchInput/SearchInput";
import ExploreBooks from "../organisms/Explore/ExploreBooks";

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
interface BookList {
  bookList: Array<Book>;
  handleClick: (book: Book) => void;

  handleCard?: (book: Book) => void;
}
const ExplorePage = ({ bookList, handleClick, handleCard }: BookList) => {
  return (
    <Container>
      {/* <SearchInput onChange={handleSearch}/> */}
      <ExploreBooks
        bookList={bookList}
        handleClick={handleClick}
        handleCard={handleCard && handleCard}
      />
    </Container>
  );
};

export default ExplorePage;
