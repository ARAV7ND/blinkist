import * as React from "react";
import { Container, Tab, Tabs } from "@mui/material";
import CurrentlyReadingBooks from "./CurrentlyReadingBooks";
import FinishedBooks from "./FinishedBooks";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    // "& .MuiButtonBase-root.MuiTab-root": {
    //   fontSize: 20,
    // },
    // "& .Mui-selected": {
    //   textDecoration: "underline",
    // },
    width: "60%",
  },
});

interface Ibook {
  id: number;
  title: string;
  author: string;
  category: string;
  image: string;
  status: boolean;
  time: string;
}
interface statusProps {
  handleCard?: (tempBook: Ibook) => void;
}

const StatusTab = ({ handleCard }: statusProps) => {
  // const routes = ["/reading", "/finished"];
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };
  return (
    <Container>
      <Tabs value={selectedTab} onChange={handleChange}>
        <Tab disableRipple label='Currently reading' className={styles.root} />
        <Tab disableRipple label='Finished' className={styles.root} />
      </Tabs>
      <div style={{ margin: 30 }}>
        {selectedTab === 0 && <CurrentlyReadingBooks handleCard={handleCard} />}
        {selectedTab === 1 && <FinishedBooks />}
      </div>
    </Container>
  );
};

export default StatusTab;
