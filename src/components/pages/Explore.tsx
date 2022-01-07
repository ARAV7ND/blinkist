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
}
const ExplorePage = ({ bookList }: BookList) => {
  return (
    <Container maxWidth='md' style={{ margin: 100 }}>
      <ExploreBooks bookList={bookList} />
    </Container>
  );
};

export default ExplorePage;
