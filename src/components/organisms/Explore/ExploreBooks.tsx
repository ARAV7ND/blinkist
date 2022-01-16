import api from "../../configuration/api/BaseUrl";
import BookGrid from "../Grid/BookGrid/BookGrid";
import { Box, Container, Typography } from "@mui/material";

interface Ibook {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: boolean;
  time: string;
  isFinished: boolean;
}
interface IBookList {
  bookList: Array<Ibook>;
  handleClick: (book: Ibook) => void;
  handleCard?: (tempBook: Ibook) => void;
}
export default function ExploreBooks({
  bookList,
  handleClick,
  handleCard,
}: IBookList) {
  return (
    <Container>
      <Box
        style={{
          marginBottom: 40,
          // left: 280,
          // right: 250,
          textAlign: "left",
        }}
      >
        <Typography variant='subtitle1'>Trending blinks</Typography>
      </Box>
      <Box>
        {bookList && (
          <BookGrid
            bookList={bookList}
            handleClick={handleClick}
            handleCard={handleCard && handleCard}
            visible='inline'
          />
        )}
      </Box>
      {/* <h1>current Books</h1> */}
    </Container>
  );
}
