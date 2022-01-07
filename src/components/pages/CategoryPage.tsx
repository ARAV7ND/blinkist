import { Container } from "@mui/material";
import { height } from "@mui/system";
import * as React from "react";
import api from "../configuration/api/BaseUrl";
import BookGrid from "../organisms/Grid/BookGrid/BookGrid";
import CategoryContext from "./CategoryContext";

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
}

const CategoryPage = () => {
  const bookList = React.useContext(CategoryContext);
  console.log(bookList);

  const handleClick = async (book: Book) => {
    await api.post("/books", book);
  };
  const handleCard = () => {
    console.log("hello");
  };
  return (
    <>
      <Container>
        <BookGrid
          bookList={bookList}
          handleCard={handleCard}
          visible='inline'
          handleClick={handleClick}
        />
      </Container>
    </>
  );
};

export default CategoryPage;
