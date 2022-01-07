import api from "../../configuration/api/BaseUrl";
import React, { useState, useEffect, useContext } from "react";
import BookGrid from "../Grid/BookGrid/BookGrid";
import { Container } from "@mui/material";

interface Ibook {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: boolean;
  time: string;
}
interface IBookList {
  bookList: Array<Ibook>;
}
export default function ExploreBooks({ bookList }: IBookList) {
  const handleClick = (book: Ibook) => {
    console.log(book);
  };

  return (
    <Container>
      {bookList && (
        <BookGrid
          bookList={bookList}
          handleClick={handleClick}
          visible='inline'
        />
      )}
      {/* <h1>current Books</h1> */}
    </Container>
  );
}
