import { Box, Button, Container, Grid, Typography } from "@mui/material";
import * as React from "react";
import TimeIcon from "@mui/icons-material/AccessTime";
import { makeStyles } from "@mui/styles";
import api from "../../configuration/api/BaseUrl";
interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: boolean;
  time: string;
}
type BookProps = {
  book?: Book;
  handleAddTolibrary: (book: Book) => void;
};

const useStyles = makeStyles({
  buttonHead: {
    marginTop: 95,
    marginLeft: 0,
    display: "relative",
    textAlign: "left",
  },
  buttonStyles: {
    marginLeft: 10,
  },
});

const Browse = ({ book, handleAddTolibrary }: BookProps) => {
  // const handleAddToLibrary = () => {
  //   console.log("Add to library");
  // };

  const handleFinish = async (theBook: Book) => {
    // console.log("finish", book);

    await api.delete(`/books/${theBook.id}`);
    const response = await api.post("/finished", theBook);
    redirect();
  };

  const redirect = () => {
    window.location.href = "/library";
  };
  // console.log(book);
  const classes = useStyles();
  return (
    <Container
      style={{ position: "relative", margin: 100, left: 280, right: 250 }}
    >
      <Grid container flexDirection={"row"}>
        <Grid item md={6}>
          <Box component='div' style={{ textAlign: "left" }}>
            <Typography variant='h1'>{book && book.title}</Typography>
            <Typography variant='subtitle1'>
              Turning Your Business into an Enduring Great Company
            </Typography>
            <Typography variant='body1'>By {book && book.author}</Typography>
            <Typography variant='caption'>
              <TimeIcon fontSize='small' />
              &nbsp; {book && book.time} minutes read
            </Typography>
          </Box>
          <Box className={classes.buttonHead}>
            <Button
              children={
                book && (book.status === false ? "Add to Library" : "Read Now")
              }
              variant='outlined'
              color='primary'
              onClick={() => {
                book && book.status === false && handleAddTolibrary(book);
              }}
            ></Button>
            <Button
              style={{
                marginLeft: 50,
              }}
              children={
                book && (book.status === true ? "Finished Reading" : "Buy Now")
              }
              variant='contained'
              color='primary'
              className={classes.buttonStyles}
              onClick={() => book && handleFinish(book)}
            ></Button>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box>
            <img
              src={book && book.image}
              alt='img'
              style={{ width: "304px", height: "304px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default Browse;
