import { Typography } from "@material-ui/core";
import { Box, Container } from "@mui/material";
import * as React from "react";
import StatusTab from "../../organisms/StatusTab/StatusTab";
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
const HomePage = () => {
  return (
    <Container data-testid='home-page'>
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
        <StatusTab />
      </Box>
    </Container>
  );
};

export default HomePage;
