import * as React from "react";
import { Tab, Tabs } from "@mui/material";
import AvailableBooks from "./CurrentlyReadingBooks";
import FinishedBooks from "./FinishedBooks";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  tabs: {
    // "& .MuiButtonBase-root.MuiTab-root": {
    //   fontSize: 20,
    // },
    // "& .Mui-selected": {
    //   textDecoration: "underline",
    // },
  },
});

const StatusTab = () => {
  // const routes = ["/reading", "/finished"];
  const styles = useStyles();
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };
  return (
    <>
      <Tabs
        className={styles.tabs}
        value={selectedTab}
        onChange={handleChange}
        centered
      >
        <Tab disableRipple label='Currently reading' />
        <Tab disableRipple label='Finished' />
      </Tabs>
      <div style={{ margin: 30 }}>
        {selectedTab === 0 && <AvailableBooks />}
        {selectedTab === 1 && <FinishedBooks />}
      </div>
    </>
  );
};

export default StatusTab;
