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
    borderBottom: "1px solid #BAC8CE",
    borderLeft: "1px solid #BAC8CE",
    borderRight: "1px solid #BAC8CE",
  },

  icon: {
    minWidth: "30px",
  },
  actions: {
    // margin: 12,
    // justifyContent: "center",
    padding: 1,
    border: "1px solid #BAC8CE",
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
  isFinished: boolean;
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
  return (
    <Card data-testid='book-card'>
      <Box
        to='/browse'
        component={Link}
        style={{ textDecoration: "none" }}
        onClick={() => handleCard && handleCard(book)}
        data-testid='cardClick'
      >
        <CardMedia
          className={styles.image}
          component='img'
          src={book.image}
          alt='image'
        />

        <CardContent className={styles.content}>
          <Box>
            <Typography variant='subtitle2' sx={{ fontWeight: 800 }}>
              {book.title}
            </Typography>
            <Typography variant='body1' sx={{ fontWeight: 400 }}>
              {book.author}
            </Typography>
            <ListItem style={{ padding: "0px 0px" }}>
              <ListItemIcon style={{ minWidth: "27px" }}>
                <TimeIcon fontSize='small' />
              </ListItemIcon>
              <ListItemText style={{ paddingLeft: "0px", paddingRight: "0px" }}>
                {book.time} minutes read
              </ListItemText>
            </ListItem>
          </Box>
        </CardContent>
      </Box>
      {book.status === false && (
        <Box className={styles.actions}>
          <CardActions style={{ padding: 2 }}>
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
      )}
      {book.status === true && (
        <Box data-testid='progress-bar'>
          <CardMedia src={statusBar} component='img' />
        </Box>
      )}
    </Card>
  );
}

export default BookCard;
