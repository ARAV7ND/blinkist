import { Box, Container, makeStyles } from "@mui/material";
import * as React from "react";
import StatusTab from "../organisms/StatusTab/StatusTab";
interface Ibook {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: boolean;
  time: string;
}
interface HomeProps {
  handleCard?: (tempBook: Ibook) => void;
}

const HomePage = ({ handleCard }: HomeProps) => {
  return (
    <Container style={{ margin: 100, marginLeft: 259, marginRight: 259 }}>
      <Box>
        <div
          style={{
            margin: 50,
            fontSize: 25,
          }}
        >
          My Library
        </div>
        <StatusTab handleCard={handleCard} />
      </Box>
    </Container>
  );
};

export default HomePage;
