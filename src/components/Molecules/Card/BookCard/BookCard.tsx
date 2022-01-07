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
import { CustomButtom } from "../../../Atoms/Button/Button";
import AddIcon from "@mui/icons-material/Add";
const useStyles = makeStyles({
  root: {
    // width: "100%",
    // display: "flex",
    // flexGrow: 1,
    maxWidth: 206,
    // maxHeight: 509,
    // margin: 35,
    // marginRight: 50,
    // height: 509,
    border: "none",
    boxShadow: "none",
  },
  image: {
    width: "100%",
    // width: 296,
    maxHeight: 296,
    border: "none",
    boxShadow: "none",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
    margin: 0,
    justifyContent: "space-evenly",
    border: "1px solid",
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

type BookCardProps = {
  book: {
    id?: number;
    title: string;
    author: string;
    category: string;
    image: string;
    status?: boolean;
    time: string;
  };
  handleClick: () => void;
  handleCard?: () => void;
  visible: "none" | "inline";
};

export function BookCard({
  book,
  visible,
  handleCard,
  handleClick,
}: BookCardProps) {
  const styles = useStyles();
  return (
    <div onClick={handleCard} style={{ cursor: "pointer" }}>
      <Card className={styles.root}>
        <CardMedia
          className={styles.image}
          component='img'
          src={book.image}
          alt='image'
        />

        <CardContent className={styles.content}>
          <Box>
            <Typography variant='h5'>{book.title}</Typography>
            <Typography variant='subtitle1'>{book.author}</Typography>
            {/* <Typography>{book.category}</Typography> */}
            {/* <ListItem>
              <ListItemIcon style={{ minWidth: 30 }}>
                <TimeIcon />
              </ListItemIcon>
              <ListItemText>{book.time} minutes read</ListItemText>
            </ListItem> */}
            <Typography variant='body2'>
              <TimeIcon fontSize='small' />
              &nbsp; {book.time} minutes read
            </Typography>
          </Box>
        </CardContent>

        <Box display={visible}>
          <CardActions style={{ padding: 0 }}>
            <CustomButtom
              label='Add to library'
              startIcon={<AddIcon />}
              variant='outlined'
              color='primary'
              size='large'
              width={true}
              handleClick={handleClick}
            />
          </CardActions>
        </Box>
      </Card>
    </div>
  );
}

export default BookCard;
