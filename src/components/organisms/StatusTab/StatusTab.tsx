import * as React from "react";
import { Tab, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { TabPanel, TabList, TabContext } from "@mui/lab";
import BookGrid from "../Grid/BookGrid/BookGrid";
import api from "../../../configuration/api/api";
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

const StatusTab = () => {
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
        bookList = await retriveBooks(
          "/bookRepository/?status=true&isFinished=false"
        );
      } else {
        bookList = await retriveBooks("/bookRepository/?isFinished=true");
      }
      setBooks(bookList);
    };
    getBooks();
  }, [selectedTab]);

  return (
    <>
      <TabContext value={selectedTab}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider" }}
          width='720px'
          marginBottom={2}
        >
          <TabList value={selectedTab} onChange={handleChange}>
            <Tab label='Currently reading' className={styles.root} value='0' />
            <Tab label='Finished' className={styles.root} value='1' />
          </TabList>
        </Box>

        <Box>
          <TabPanel value='0' id='currently-reading'>
            <BookGrid bookList={books} />
          </TabPanel>
          <TabPanel value='1' id='finish'>
            <BookGrid bookList={books}></BookGrid>
          </TabPanel>
        </Box>
      </TabContext>
    </>
  );
};

export default StatusTab;
