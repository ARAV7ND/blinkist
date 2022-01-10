import { Container, makeStyles } from "@mui/material";
import * as React from "react";
import ExploreBooks from "../organisms/Explore/ExploreBooks";
import StatusTab from "../organisms/StatusTab/StatusTab";

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
}
const ExplorePage = ({ bookList, handleClick }: BookList) => {
  return (
    <Container style={{ margin: 100, marginLeft: 259, marginRight: 259 }}>
      <ExploreBooks bookList={bookList} handleClick={handleClick} />
    </Container>
  );
};

export default ExplorePage;
