import { Grid } from "@mui/material";
import * as React from "react";
import BookCard from "../../../Molecules/Card/BookCard/BookCard";
interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: boolean;
  time: string;
}
interface BookList {
  bookList: Array<Book>;
  handleClick: (book: Book) => void;
  handleCard?: (book: Book) => void;
  visible: "none" | "inline";
}

const BookGrid = ({ bookList, visible, handleCard, handleClick }: BookList) => {
  return (
    <Grid container rowGap={1}>
      {bookList.map((book) => (
        <Grid item key={book.id} md={4} sm={6} xs={12}>
          <BookCard
            book={book}
            handleClick={() => {
              handleClick(book);
            }}
            handleCard={handleCard}
            visible={book.status}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default BookGrid;
