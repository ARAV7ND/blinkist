import { Container, makeStyles } from "@mui/material";
import * as React from "react";
import StatusTab from "../organisms/StatusTab/StatusTab";

const HomePage = () => {
  return (
    <Container style={{ margin: 100 }}>
      <div
        style={{
          margin: 50,
          fontSize: 25,
        }}
      >
        My Library
      </div>
      <StatusTab />
    </Container>
  );
};

export default HomePage;
