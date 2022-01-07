import { Container, makeStyles } from "@mui/material";
import * as React from "react";
import ExploreBooks from "../organisms/Explore/ExploreBooks";
import StatusTab from "../organisms/StatusTab/StatusTab";
const ExplorePage = () => {
  return (
    <Container maxWidth='md' style={{ marginTop: 50 }}>
      <ExploreBooks />
    </Container>
  );
};

export default ExplorePage;
