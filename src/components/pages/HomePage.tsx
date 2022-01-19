import { Typography } from "@material-ui/core";
import { Box, Container } from "@mui/material";
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
  isFinished: boolean;
}
interface HomeProps {
  handleCard?: (tempBook: Ibook) => void;
}

const HomePage = ({ handleCard }: HomeProps) => {
  return (
    <Container>
      <Box>
        <div
          style={{
            margin: "50px 0 40px 0",
            fontSize: 25,
          }}
        >
          <Typography
            variant='h4'
            style={{ fontWeight: 700, marginBottom: "0.5" }}
          >
            My Library
          </Typography>
        </div>
        <StatusTab handleCard={handleCard} />
      </Box>
    </Container>
  );
};

export default HomePage;
