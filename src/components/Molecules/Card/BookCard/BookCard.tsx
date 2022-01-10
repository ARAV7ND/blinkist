import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import TimeIcon from "@mui/icons-material/AccessTime";
import AddIcon from "@mui/icons-material/Add";
import statusBar from "../../../../assets/statusBar.png";
import CustomButton from "../../../Atoms/Button/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles({
  root: {
    // width: "100%",
    maxWidth: 284,
    maxHeight: 466,
    // margin: 35,
    // marginRight: 50,
    // height: 509,
    border: "none",
    boxShadow: "none",
  },
  image: {
    // width: "100%",
    width: "285px",
    maxHeight: "287px",
    border: "none",
    boxShadow: "none",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    padding: "0",
    margin: "0",
    // justifyContent: "space-evenly",
    textAlign: "left",
    // border: "1px transparent",
    borderBottom: "1px solid #E1ECFC",
  },

  icon: {
    minWidth: "30px",
  },
  actions: {
    // margin: 12,
    // justifyContent: "center",
    padding: 0,
  },
});

interface Book {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: boolean;
  time: string;
}
type BookCardProps = {
  book: Book;
  handleClick: () => void;
  handleCard?: (tempBook: Book) => void;
  visible: boolean;
};

export function BookCard({
  book,
  visible,
  handleCard,
  handleClick,
}: BookCardProps) {
  const styles = useStyles();
  const flag: string = book.status ? "none" : "inline";
  const set: string = book.status ? "inline" : "none";
  return (
    <Card className={styles.root}>
      <Box
        to='/browse'
        component={Link}
        style={{ textDecoration: "none" }}
        onClick={() => handleCard && handleCard(book)}
      >
        <CardMedia
          className={styles.image}
          component='img'
          src={book.image}
          alt='image'
        />

        <CardContent className={styles.content}>
          <Box>
            <Typography variant='subtitle2'>{book.title}</Typography>
            <Typography variant='body1'>{book.author}</Typography>
            <Typography variant='caption'>
              <TimeIcon fontSize='small' />
              &nbsp; {book.time} minutes read
            </Typography>
          </Box>
        </CardContent>
      </Box>
      <Box display={flag}>
        <CardActions style={{ padding: 0 }}>
          <CustomButton
            label='Add to library'
            startIcon={<AddIcon />}
            variant='outlined'
            color='secondary'
            size='large'
            width={true}
            handleClick={handleClick}
          />
        </CardActions>
      </Box>

      <Box display={set}>
        <CardMedia src={statusBar} component='img' />
      </Box>
    </Card>
  );
}

export default BookCard;
