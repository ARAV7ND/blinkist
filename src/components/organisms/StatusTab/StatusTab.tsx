import * as React from "react";
import { Tab, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import BookGrid from "../Grid/BookGrid/BookGrid";
import api from "../../configuration/api/BaseUrl";
import { useState, useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "400px",
  },
}));

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
interface StatusProps {
  handleCard?: (tempBook: Ibook) => void;
}

const StatusTab = ({ handleCard }: StatusProps) => {
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = React.useState("0");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setSelectedTab(newValue);
  };
  const [books, setBooks] = useState([]);

  const retriveBooks = async (path: string) => {
    const response = await api.get(path);
    return response.data;
  };

  useEffect(() => {
    let bookList: never[] = [];
    const getBooks = async () => {
      if (selectedTab === "0") {
        bookList = await retriveBooks("/currentlyReading");
      } else {
        bookList = await retriveBooks("/finished");
      }
      setBooks(bookList);
    };
    getBooks();
  }, [selectedTab]);

  const handleFinish = async (book: Ibook) => {
    handleRemove(book);
    book.isFinished = true;
    await api.post("/finished", book);
    const allBooks = await retriveBooks("/currentlyReading");
    if (allBooks) {
      setBooks(allBooks);
    }
  };

  const handleRemove = async (book: Ibook) => {
    await api.delete(`/currentlyReading/${book.id}`);
    const newBookList = books.filter((tempBook: Ibook) => {
      return book.id !== tempBook.id;
    });
    setBooks(newBookList);
    console.log("length : ", newBookList.length);
  };

  const handleClick = (book: Ibook) => {
    handleFinish(book);
  };

  return (
    <>
      <TabContext value={selectedTab}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          width='720px'
          marginBottom={2}
        >
          <TabList value={selectedTab} onChange={handleChange}>
            <Tab
              label='Currently reading'
              className={styles.root}
              value='0'
              sx={{}}
            />
            <Tab label='Finished' className={styles.root} value='1' />
          </TabList>
        </Box>

        <Box>
          <TabPanel value='0'>
            <BookGrid
              bookList={books}
              handleClick={handleClick}
              handleCard={handleCard && handleCard}
              visible='none'
            />
          </TabPanel>
          <TabPanel value='1'>
            <BookGrid
              bookList={books}
              handleClick={handleClick}
              handleCard={handleCard && handleCard}
              visible='none'
            ></BookGrid>
          </TabPanel>
        </Box>
      </TabContext>
    </>
  );
};

export default StatusTab;
